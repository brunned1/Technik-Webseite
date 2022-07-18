


 //  Image Lazy loading
document.addEventListener("DOMContentLoaded", function() {
	var lazyloadImages;
  
	if ("IntersectionObserver" in window) {
	  lazyloadImages = document.querySelectorAll(".lazy");
	  var imageObserver = new IntersectionObserver(function(entries, observer) {
		entries.forEach(function(entry) {
		  if (entry.isIntersecting) {
			var image = entry.target;
			image.src = image.dataset.src;
			image.classList.remove("lazy");
			imageObserver.unobserve(image);
		  }
		});
	  });
  
	  lazyloadImages.forEach(function(image) {
		imageObserver.observe(image);
	  });
	} else {
	  var lazyloadThrottleTimeout;
	  lazyloadImages = document.querySelectorAll(".lazy");
  
	  function lazyload () {
		if(lazyloadThrottleTimeout) {
		  clearTimeout(lazyloadThrottleTimeout);
		}
  
		lazyloadThrottleTimeout = setTimeout(function() {
		  var scrollTop = window.pageYOffset;
		  lazyloadImages.forEach(function(img) {
			  if(img.offsetTop < (window.innerHeight + scrollTop)) {
				img.src = img.dataset.src;
				img.classList.remove('lazy');
			  }
		  });
		  if(lazyloadImages.length == 0) {
			document.removeEventListener("scroll", lazyload);
			window.removeEventListener("resize", lazyload);
			window.removeEventListener("orientationChange", lazyload);
		  }
		}, 20);
	  }
  
	  document.addEventListener("scroll", lazyload);
	  window.addEventListener("resize", lazyload);
	  window.addEventListener("orientationChange", lazyload);
	}
  })
  
  // Background image lazy load
  document.addEventListener("DOMContentLoaded", function() {
	var lazyloadImages;
  
	if ("IntersectionObserver" in window) {
	  lazyloadImages = document.querySelectorAll(".lazy");
	  var imageObserver = new IntersectionObserver(function(entries, observer) {
		entries.forEach(function(entry) {
		  if (entry.isIntersecting) {
			var image = entry.target;
			image.classList.remove("lazy");
			imageObserver.unobserve(image);
		  }
		});
	  });
  
	  lazyloadImages.forEach(function(image) {
		imageObserver.observe(image);
	  });
	} else {
	  var lazyloadThrottleTimeout;
	  lazyloadImages = document.querySelectorAll(".lazy");
  
	  function lazyload () {
		if(lazyloadThrottleTimeout) {
		  clearTimeout(lazyloadThrottleTimeout);
		}
  
		lazyloadThrottleTimeout = setTimeout(function() {
		  var scrollTop = window.pageYOffset;
		  lazyloadImages.forEach(function(img) {
			  if(img.offsetTop < (window.innerHeight + scrollTop)) {
				img.src = img.dataset.src;
				img.classList.remove('lazy');
			  }
		  });
		  if(lazyloadImages.length == 0) {
			document.removeEventListener("scroll", lazyload);
			window.removeEventListener("resize", lazyload);
			window.removeEventListener("orientationChange", lazyload);
		  }
		}, 20);
	  }
  
	  document.addEventListener("scroll", lazyload);
	  window.addEventListener("resize", lazyload);
	  window.addEventListener("orientationChange", lazyload);
	}
  })




new CircleType(document.getElementById('demo1'))
.radius(180);
  
// Typed.js Code
var typed = new Typed('#typed', {
	stringsElement: '#typed-strings',
  	typeSpeed: 50,
  	startDelay: 500,
  	backSpeed: 40,
  	backDelay: 2000,
  	smartBackspace: true,
  	loop: true,
  	loopCount: Infinity,
});


/* Slick Slider */

$(".testimonial-slider-container").slick({

	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 5000,
	arrows: true,
	prevArrow: $('.prev'),
	nextArrow: $('.next'),
});






