var active = 'all';

var options = [	document.getElementById('all'), 
				document.getElementById('projects'),
				document.getElementById('repositories'),
				document.getElementById('games'),
				document.getElementById('publications'),
				document.getElementById('search')];

function select_all() {
	document.getElementById('all').style.opacity = '1';
	active = 'all';

	for (var i = 0; i < options.length; i++) {
		if (options[i].id != 'all') {
			options[i].style.opacity = 0.75;
		}
	}
}

function select_projects() {
	document.getElementById('projects').style.opacity = '1';
	active = 'projects';

	for (var i = 0; i < options.length; i++) {
		if (options[i].id != 'projects') {
			options[i].style.opacity = 0.75;
		}
	}
}

function select_repositories() {
	document.getElementById('repositories').style.opacity = '1';
	active = 'repositories';

	for (var i = 0; i < options.length; i++) {
		if (options[i].id != 'repositories') {
			options[i].style.opacity = 0.75;
		}
	}
}

function select_games() {
	document.getElementById('games').style.opacity = '1';
	active = 'games';

	for (var i = 0; i < options.length; i++) {
		if (options[i].id != 'games') {
			options[i].style.opacity = 0.75;
		}
	}
}

function select_publications() {
	document.getElementById('publications').style.opacity = '1';
	active = 'publications';

	for (var i = 0; i < options.length; i++) {
		if (options[i].id != 'publications') {
			options[i].style.opacity = 0.75;
		}
	}
}

function select_search() {
	active = 'search';

	for (var i = 0; i < options.length; i++) {
		options[i].style.opacity = 0.75;
	}
}

select_all();