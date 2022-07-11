$( document ).ready(function() {
  
// Typed.js Code
var typed = new Typed('#typed', {
	stringsElement: '#typed-strings',
  	typeSpeed: 50,
  	startDelay: 500,
  	backSpeed: 40,
  	backDelay: 2000,
  	smartBackspace: true,
  	loop: true,
  	loopCount: Infinity
});

// Typed.js Code
var typed = new Typed('#typed-phone', {
	stringsElement: '#typed-strings',
  	typeSpeed: 50,
  	startDelay: 500,
  	backSpeed: 40,
  	backDelay: 2000,
  	smartBackspace: true,
  	loop: true,
  	loopCount: Infinity
});



// Instantiate `CircleType` with an HTML element.
const circleType = new CircleType(document.getElementById('demo1'));

// Set the text radius and direction. Note: setter methods are chainable.
circleType.radius(200).dir(-1);
});

