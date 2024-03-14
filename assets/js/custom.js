$(function(){
    "use strict";

    // Scroll To Top 
    $(window).scroll(function() {
        $('.return-to-top').toggle($(this).scrollTop() > 300);
    });

    $('.return-to-top').click(function(){
        $('html, body').animate({scrollTop: 0}, 1500);
        return false;
    });

    // Welcome Animation Support
    $('.welcome-hero-txt h2, .welcome-hero-txt p, .welcome-hero-txt button').css({'opacity':'0'}).addClass('animated fadeInUp');

    // Owl Carousel
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
    });

    var testimonialCarousel = $('.testimonial-carousel');
    testimonialCarousel.owlCarousel({
        items:3,
        margin:0,
        loop:true,
        autoplay:true,
        smartSpeed:1000,
        dots:false,
        autoplayHoverPause:false,
        responsive:{
            0:{ items:1 },
            640:{ items:2 },
            992:{ items:3 }
        }
    });

    $('.brand-item').owlCarousel({
        items:6,
        loop:true,
        smartSpeed: 1000,
        autoplay:true,
        dots:false,
        autoplayHoverPause:false,
        responsive:{
            0:{ items:2 },
            415:{ items:2 },
            600:{ items:3 },
            1000:{ items:6 }
        }
    });

    $('.play').click(function(){
        testimonialCarousel.trigger('play.owl.autoplay',[1000])
    });

    $('.stop').click(function(){
        testimonialCarousel.trigger('stop.owl.autoplay')
    });

    // Fetching various sections of a page
    function fetchContent(url, targetElement) {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error("HTTP error!");
                }
                return response.text();
            })
            .then(textData => {
                targetElement.innerHTML = textData;
            })
            .catch(error => {
                console.error("Error fetching content:", error);
            });
    }

    fetchContent("nav.html", document.getElementById("nav-area"));
    fetchContent("footer.html", document.getElementById("footer-area"));

    // Countdown Timer
    var countDownDate = new Date("Nov 5, 2024 15:37:25").getTime();
    var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "EXPIRED";
        }
    }, 1000);

    // Coming Soon Page JS
    const elements = {
        seconds: document.querySelector(".seconds .number"),
        minutes: document.querySelector(".minutes .number"),
        hours: document.querySelector(".hours .number"),
        days: document.querySelector(".days .number")
    };

    let timeValues = { sec: 11, min: 2, hour: 2, day: 9 };
    const timeFunction = setInterval(() => {
        timeValues.sec--;
        if (timeValues.sec === 0) {
            timeValues.min--;
            timeValues.sec = 60;
        }
        if (timeValues.min === 0) {
            timeValues.hour--;
            timeValues.min = 60;
        }
        if (timeValues.hour === 0) {
            timeValues.day--;
            timeValues.hour = 24;
        }
        if (timeValues.day === 0) {
            clearInterval(timeFunction);
        }
        elements.seconds.textContent = timeValues.sec < 10 ? `0${timeValues.sec}` : timeValues.sec;
        elements.minutes.textContent = timeValues.min < 10 ? `0${timeValues.min}` : timeValues.min;
        elements.hours.textContent = timeValues.hour < 10 ? `0${timeValues.hour}` : timeValues.hour;
        elements.days.textContent = timeValues.day < 10 ? `0${timeValues.day}` : timeValues.day;
    }, 1000);

    // Catalog Page Content Generation from JSON file
    fetch('Car.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('featured-cars-row');
            data.cars.forEach(car => {
                container.innerHTML += `
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <div class="single-featured-cars">
                            <div class="featured-img-box">
                                <div class="featured-cars-img">
                                    <img src="${car.image}" alt="cars">
                                </div>
                                <div class="featured-model-info">
                                    <p>model: ${car.year} <span class="featured-mi-span"> ${car.mileage}</span> 
                                    <span class="featured-hp-span"> ${car.horsepower}</span> ${car.transmission}</p>
                                </div>
                            </div>
                            <div class="featured-cars-txt">
                                <h2><a href="#">${car.model}</a></h2>
                                <h3>${car.price}</h3>
                                <p>${car.description}</p>
                            </div>
                        </div>
                    </div>
                `;
            });
        })
        .catch(error => console.error('Error loading car data:', error));
});
$(function(){
    "use strict";

    // Scroll To Top 
    $(window).scroll(function() {
        $('.return-to-top').toggle($(this).scrollTop() > 300);
    });

    $('.return-to-top').click(function(){
        $('html, body').animate({scrollTop: 0}, 1500);
        return false;
    });

    // Welcome Animation Support
    $('.welcome-hero-txt h2, .welcome-hero-txt p, .welcome-hero-txt button').css({'opacity':'0'}).addClass('animated fadeInUp');

    // Owl Carousel
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
    });

    var testimonialCarousel = $('.testimonial-carousel');
    testimonialCarousel.owlCarousel({
        items:3,
        margin:0,
        loop:true,
        autoplay:true,
        smartSpeed:1000,
        dots:false,
        autoplayHoverPause:false,
        responsive:{
            0:{ items:1 },
            640:{ items:2 },
            992:{ items:3 }
        }
    });

    $('.brand-item').owlCarousel({
        items:6,
        loop:true,
        smartSpeed: 1000,
        autoplay:true,
        dots:false,
        autoplayHoverPause:false,
        responsive:{
            0:{ items:2 },
            415:{ items:2 },
            600:{ items:3 },
            1000:{ items:6 }
        }
    });

    $('.play').click(function(){
        testimonialCarousel.trigger('play.owl.autoplay',[1000])
    });

    $('.stop').click(function(){
        testimonialCarousel.trigger('stop.owl.autoplay')
    });

    // Fetching various sections of a page
    function fetchContent(url, targetElement) {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error("HTTP error!");
                }
                return response.text();
            })
            .then(textData => {
                targetElement.innerHTML = textData;
            })
            .catch(error => {
                console.error("Error fetching content:", error);
            });
    }

    fetchContent("nav.html", document.getElementById("nav-area"));
    fetchContent("footer.html", document.getElementById("footer-area"));

    // Countdown Timer
    var countDownDate = new Date("Nov 5, 2024 15:37:25").getTime();
    var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "EXPIRED";
        }
    }, 1000);

    // Coming Soon Page JS
    const elements = {
        seconds: document.querySelector(".seconds .number"),
        minutes: document.querySelector(".minutes .number"),
        hours: document.querySelector(".hours .number"),
        days: document.querySelector(".days .number")
    };

    let timeValues = { sec: 11, min: 2, hour: 2, day: 9 };
    const timeFunction = setInterval(() => {
        timeValues.sec--;
        if (timeValues.sec === 0) {
            timeValues.min--;
            timeValues.sec = 60;
        }
        if (timeValues.min === 0) {
            timeValues.hour--;
            timeValues.min = 60;
        }
        if (timeValues.hour === 0) {
            timeValues.day--;
            timeValues.hour = 24;
        }
        if (timeValues.day === 0) {
            clearInterval(timeFunction);
        }
        elements.seconds.textContent = timeValues.sec < 10 ? `0${timeValues.sec}` : timeValues.sec;
        elements.minutes.textContent = timeValues.min < 10 ? `0${timeValues.min}` : timeValues.min;
        elements.hours.textContent = timeValues.hour < 10 ? `0${timeValues.hour}` : timeValues.hour;
        elements.days.textContent = timeValues.day < 10 ? `0${timeValues.day}` : timeValues.day;
    }, 1000);

    // Catalog Page Content Generation from JSON file
    fetch('Car.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('featured-cars-row');
            data.cars.forEach(car => {
                container.innerHTML += `
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <div class="single-featured-cars">
                            <div class="featured-img-box">
                                <div class="featured-cars-img">
                                    <img src="${car.image}" alt="cars">
                                </div>
                                <div class="featured-model-info">
                                    <p>model: ${car.year} <span class="featured-mi-span"> ${car.mileage}</span> 
                                    <span class="featured-hp-span"> ${car.horsepower}</span> ${car.transmission}</p>
                                </div>
                            </div>
                            <div class="featured-cars-txt">
                                <h2><a href="#">${car.model}</a></h2>
                                <h3>${car.price}</h3>
                                <p>${car.description}</p>
                            </div>
                        </div>
                    </div>
                `;
            });
        })
        .catch(error => console.error('Error loading car data:', error));
});
