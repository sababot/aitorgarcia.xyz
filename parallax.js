var intro_div = document.getElementById('intro');
var about_div = document.getElementById('about');
var projects_div = document.getElementById('projects');

var elements = [];

elements.push(intro_div);
elements.push(about_div);
elements.push(projects_div);

let value = 0;

// init
for (let i = 0; i < elements.length; i++){
	if (-0.5 * value <= (i + 1) * (screen.width / 2)){
		elements[i].style.left = -0.5 * (value + (i * screen.width)) + 'px';

		if (-0.5 * value > ((i + 1) * (screen.width / 2)) - 500){
			elements[i].style.color = 'transparent';
		}
	}
}

window.addEventListener('wheel', function(e){
	console.log(value);

	if (-0.5 * value < elements.length * (screen.width / 2)){
		value += e.deltaY;
	}
	else if (-0.5 * value > elements.length * (screen.width / 2)){
		value = (elements.length * (screen.width / 2) - 10) / -0.5;
	}

	for (let i = 0; i < elements.length; i++){
		if (-0.5 * value <= (i + 1) * (screen.width / 2)){
			elements[i].style.left = -0.5 * (value + (i * screen.width)) + 'px';

			if (-0.5 * value > ((i + 1) * (screen.width / 2)) - 500){
				elements[i].style.color = 'transparent';
			}
		}
	}
})