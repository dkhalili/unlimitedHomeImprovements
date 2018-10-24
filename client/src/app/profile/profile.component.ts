import { Component } from '@angular/core';
import { AuthenticationService, UserDetails } from '../authentication.service';
import { ProjectRequestService, ProjectDetails} from '../projectRequest.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './profile.component.html'
})
export class ProfileComponent {
  details: UserDetails;
  projects: any;

  constructor(private auth: AuthenticationService, private proj: ProjectRequestService, private router: Router) {}
  
  ngOnInit() {    
    this.auth.profile().subscribe(user => {
      this.details = user;
    }, (err) => {
      console.error(err);
    });


    this.proj.getProjects().subscribe(projects => {
      this.projects = projects;
    }, (err) => {
      console.error(err);
    });
  }


  projectDelete(_id) {
    this.proj.projectDelete(_id).subscribe(projects => {
          location.reload();
      }, (err) => {
        console.error(err);
      });
  }
}
