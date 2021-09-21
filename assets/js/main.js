
/*------------------------------------------------------------------------------------
    
JS INDEX
=============

01 - Ripple Setup
02 - Animated Headline Setup
03 - Portfolio Image
04 - Testimonial Slider


-------------------------------------------------------------------------------------*/


(function ($) {
	"use strict";

	jQuery(document).ready(function ($) {

		/* 
		=================================================================
		01 - Ripple Setup
		=================================================================	
		*/

		$('#home').ripples({
			resolution: 500,
			dropRadius: 20,
			perturbance: 0.04
		})

		/* 
		=================================================================
		02 - Animated Headline Setup
		=================================================================	
		*/


		$(function () {
			$('.caption-inner').animatedHeadline({
				animationType: 'clip'
			});
		})


		/* 
		=================================================================
		03 - Portfolio Image
		=================================================================	
		*/

		$('.zoom-img').magnificPopup({
			delegate: 'a',
			type: 'image',
			gallery: {
				enabled: true
			}
		});

		/* 
		=================================================================
		04 - Testimonial Slider
		=================================================================	
		*/

		$(".fabon-testimonial-area .owl-carousel").owlCarousel({
			autoplay: true,
			loop: true,
			margin: 30,
			touchDrag: true,
			mouseDrag: true,
			items: 1,
			nav: false,
			dots: true,
			autoplayTimeout: 6000,
			autoplaySpeed: 1200,
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 1
				},
				600: {
					items: 2
				},
				1000: {
					items: 2
				},
				1200: {
					items: 2
				}
			}
		});


	});

}(jQuery));





var form = document.getElementById('form')
form.addEventListener('submit', function(e) {
	e.preventDefault();
	var name = document.getElementById("contact-name").value
	var email = document.getElementById("contact-email").value
	var phone = document.getElementById("contact-phone").value
	var message = document.getElementById("contact-message").value


	// const options = {
	// 	method: 'POST',
	// 	body: JSON.stringify({
	// 		name: name,
	// 		email: email,
	// 		phone: phone,
	// 		message: message
	// 	})  
	// };
	fetch( 'https://infinidevapi.herokuapp.com/form', {
		method: 'POST',
		body: JSON.stringify({
			name: name,
			email: email,
			phone: phone,
			message: message
		}), 
		headers: {
			"Content-Type": "application/json; charset=UTF-8"
			}
	},
	)
		.then( response => response.json() )
		.then( response => {
				console.log(response.data)
		});


		form.reset();


})


//https://infinidevapi.herokuapp.com/form



