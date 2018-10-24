import { Component } from '@angular/core';
import { ProjectRequestService, ProjectPayload } from '../projectRequest.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';


@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent {
	

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
      this.openModal();
      }, (err) => {
      console.error(err);
    });
  }

openModal() {
	var name = $( "input[name='name']" ).val();
	$('.tymodal').show();
	$('.tymodal-close').click( function() {
		$('.tymodal').hide();
		$('.form-control') .val('');

	});
}




}
