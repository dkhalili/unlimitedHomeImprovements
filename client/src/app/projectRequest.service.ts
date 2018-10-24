import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { Router } from '@angular/router';


export interface UserDetails {
  _id: string;
  email: string;
  name: string;
  exp: number;
  iat: number;
}

export interface ProjectDetails {
  _id: string;
  name: string;
  email: string;
  phoneNumber: string;
  projectCategory: string;
  description: string;
  exp: number;
  iat: number;
  date: string,
  street: string,
  city: string,
  state: string,
  zip: string,
}

interface TokenResponse {
  token: string;
}

export interface ProjectPayload {
  name: string;
  email: string;
  phoneNumber: string;
  projectCategory: string;
  description: string;
  _id: string;
  date: string,
  street: string,
  city: string,
  state: string,
  zip: string,
}

@Injectable()
export class ProjectRequestService {

  private token: string;
  
  private projectId: string;

  constructor(private http: HttpClient, private router: Router) {}

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('mean-token');
    }
    return this.token;
  }

  private saveToken(token: string): void {
    localStorage.setItem('mean-token', token);
    this.token = token;
  }

  public getUserDetails(): UserDetails {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  public isLoggedIn(): boolean {
    const user = this.getUserDetails();
    if (user) {
      return user.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

  private request(method: 'post'|'get'|'delete', type: 'projects'|'project'|string, project?: ProjectPayload): Observable<any> {
    let base;

    if (method === 'post') {
      base = this.http.post(`/api/${type}`, project);
    } else if (method === 'delete') {
      base = this.http.delete(`/api/${type}`);
    } else {
      base = this.http.get(`/api/${type}`, { headers: { Authorization: `Bearer ${this.getToken()}` }});
    }

    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token);
        }
        return data;
      })
    );

    return request;
  }

private deleteRequest(method: 'delete', type: 'project', _id : string): Observable<any> {
    let base;

    base = this.http.delete(`/api/${type}/?_id=${_id}`);


    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token);
        }
        return data;
      })
    );

    return request;
  }





  public projectCreate(projectinfo: ProjectPayload): Observable<any> {
    return this.request('post', 'project', projectinfo);
  }


  public getProjects(): Observable<any> {
    return this.request('get', 'projects');
  }

  public projectDelete(_id): Observable<any> {
    return this.deleteRequest('delete', 'project', _id);
  }

}
