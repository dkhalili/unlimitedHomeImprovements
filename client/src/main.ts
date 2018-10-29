import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


import * as $ from 'jquery';


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));



$(document).ready(function() { 


	$('.homeLink').click(function(){
	$('html,body').animate({
        scrollTop: $(".home-header").offset().top},
        'slow');
	})


	$('.aboutUsLink').click(function(){
	$('html,body').animate({
        scrollTop: $(".aboutUs-header").offset().top},
        'slow');
	})



	$('.servicesLink').click(function(){
	$('html,body').animate({
        scrollTop: $(".services").offset().top},
        'slow');
	})


	$('.requestLink').click(function(){
	$('html,body').animate({
        scrollTop: $(".home-header").offset().top},
        'slow');
	})

	$('.started button').click(function(){
	$('html,body').animate({
        scrollTop: $(".home-header").offset().top},
        'slow');
	})








})