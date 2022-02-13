var controller = new ScrollMagic.Controller();

var wipeAnimation = new TimelineMax()
	// animate to second panel
	.to("#slideContainer", 0.5, {z: -150})		// move back in 3D space
	.to("#slideContainer", 1,   {x: "-25%"})	// move in to first panel
	.to("#slideContainer", 0.5, {z: 0})				// move back to origin in 3D space
	// animate to third panel
	.to("#slideContainer", 0.5, {z: -150, delay: 1})
	.to("#slideContainer", 1,   {x: "-50%"})
	.to("#slideContainer", 0.5, {z: 0})
	// animate to forth panel
	.to("#slideContainer", 0.5, {z: -150, delay: 1})
	.to("#slideContainer", 1,   {x: "-75%"})
	.to("#slideContainer", 0.5, {z: 0})
	// animate to fith panel
	.to("#slideContainer", 0.5, {z: -150, delay: 1})
	.to("#slideContainer", 1,   {x: "-100%"})
	.to("#slideContainer", 0.5, {z: 0});

new ScrollMagic.Scene({
		triggerElement: "#start",
		duration: "500%"
	})
	.setPin("#container")
	.setTween(wipeAnimation)
	.addTo(controller);

window.addEventListener('scroll', function () {
	document.getElementById('header-element').style.top = document.getElementById('header-target').style.top + window.pageYOffset + 'px';
	document.getElementById('journey-slider').style.top = document.getElementById('header-target').style.top + window.pageYOffset + 'px';
	document.getElementById('myRange').value = window.pageYOffset / ((document.getElementById('myRange').max / 2.5) / 16);
});