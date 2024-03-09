$(document).ready(function(){
	"use strict";
    
        /*==================================
* Author        : "ThemeSine"
* Template Name : CarVilla HTML Template
* Version       : 1.1
* Modifed by    : Obinna 
==================================== */




/*=========== TABLE OF CONTENTS ===========
1. Scroll To Top
2. welcome animation support
3. owl carousel
4. Fetching various sections of a page
======================================*/

    // 1. Scroll To Top 
		$(window).on('scroll',function () {
			if ($(this).scrollTop() > 300) {
				$('.return-to-top').fadeIn();
			} else {
				$('.return-to-top').fadeOut();
			}
		});
		$('.return-to-top').on('click',function(){
				$('html, body').animate({
				scrollTop: 0
			}, 1500);
			return false;
		});

	// 2. welcome animation support

        $(window).load(function(){
        	$(".welcome-hero-txt h2,.welcome-hero-txt p").removeClass("animated fadeInUp").css({'opacity':'0'});
            $(".welcome-hero-txt button").removeClass("animated fadeInDown").css({'opacity':'0'});
        });

        $(window).load(function(){
        	$(".welcome-hero-txt h2,.welcome-hero-txt p").addClass("animated fadeInUp").css({'opacity':'0'});
            $(".welcome-hero-txt button").addClass("animated fadeInDown").css({'opacity':'0'});
        });

	
	// 3. owl carousel

		// i.  new-cars-carousel
		
			$("#new-cars-carousel").owlCarousel({
				items: 1,
				autoplay:true,
				loop: true,
				dots:true,
				mouseDrag:true,
				nav:false,
				smartSpeed:1000,
				transitionStyle:"fade",
				animateIn: 'fadeIn',
				animateOut: 'fadeOutLeft'
				// navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
			});


		// ii. .testimonial-carousel
	
		
			var owl=$('.testimonial-carousel');
			owl.owlCarousel({
				items:3,
				margin:0,
				
				loop:true,
				autoplay:true,
				smartSpeed:1000,
				
				//nav:false,
				//navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
				
				dots:false,
				autoplayHoverPause:false,
			
				responsiveClass:true,
					responsive:{
						0:{
							items:1
						},
						640:{
							items:2
						},
						992:{
							items:3
						}
					}
				
				
			});

		// iii. .brand-item (carousel)
		
			$('.brand-item').owlCarousel({
				items:6,
				loop:true,
				smartSpeed: 1000,
				autoplay:true,
				dots:false,
				autoplayHoverPause:false,
				responsive:{
						0:{
							items:2
						},
						415:{
							items:2
						},
						600:{
							items:3
						},
						1000:{
							items:6
						}
					}
				});
				
				
				$('.play').on('click',function(){
					owl.trigger('play.owl.autoplay',[1000])
				})
				$('.stop').on('click',function(){
					owl.trigger('stop.owl.autoplay')
				})


		// 4. Fetching various sections of a page by Obinna

				//Fetching nav
			// Create a target element where you want to insert the content
		const targetElement = document.getElementById("nav-area");

		// Fetch the content from the other file
			fetch("nav.html")
 			 .then(response => {
   			 if (!response.ok) {
     		 throw new Error("HTTP error!"); // Handle errors appropriately
   			 }
    		return response.text(); // Get the text content
 			 })
  			.then(textData => {
    		targetElement.innerHTML = textData; // Insert the fetched content
 			 })
 			 .catch(error => {
    		console.error("Error fetching content:", error);
    		// Handle errors gracefully, e.g., display an error message
 			 });


			 // i.	// Fetching footer
		const targetElement2 = document.getElementById("footer-area");

		// Fetch the content from the other file
			fetch("footer.html")
 			 .then(response => {
   			 if (!response.ok) {
     		 throw new Error("HTTP error!"); // Handle errors appropriately
   			 }
    		return response.text(); // Get the text content
 			 })
  			.then(textData => {
    		targetElement2.innerHTML = textData; // Insert the fetched content
 			 })
 			 .catch(error => {
    		console.error("Error fetching content:", error);
    		// display an error message
 			 });

	// 5. countdown timer by Obinna

			// Set the date we're counting down to
		var countDownDate = new Date("Nov 5, 2024 15:37:25").getTime();

		// Update the count down every 1 second
		var x = setInterval(function() {

 		 // Get today's date and time
 		 var now = new Date().getTime();
    
  		// Find the distance between now and the count down date
 		 var distance = countDownDate - now;
    
  		// Time calculations for days, hours, minutes and seconds
  		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  		var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  		// Output the result in an element with id="demo"
  		document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  		+ minutes + "m " + seconds + "s ";
    
  		// If the count down is over, write some text 
  		if (distance < 0) {
  		clearInterval(x);
   		document.getElementById("countdown").innerHTML = "EXPIRED";
 		 }
	}, 1000);
		
			// Trigger fetch on page load
			window.addEventListener("DOMContentLoaded", fetchContent);
			});

			