import { Component } from '@angular/core';
import { ProjectRequestService, ProjectPayload } from '../projectRequest.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  projectForm: ProjectPayload = {
    name: '',
    email: '',
    phoneNumber: '',
  	projectCategory: '',
  	description: '',
    _id: '',
    date: '',
    street: '',
    city: '',
    state: '',
    zip: '',
  };

  constructor(private auth: ProjectRequestService, private router: Router) {}

  projectCreate() {
    this.auth.projectCreate(this.projectForm).subscribe(() => {
      this.router.navigateByUrl('/');
    }, (err) => {
      console.error(err);
    });
  }
}
