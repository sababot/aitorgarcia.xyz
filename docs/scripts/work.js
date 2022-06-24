var active = 'all';

var options = [	document.getElementById('all'), 
				document.getElementById('projects'),
				document.getElementById('repositories'),
				document.getElementById('games'),
				document.getElementById('publications'),
				document.getElementById('search')];

var projects = document.getElementsByClassName('card-project');
var repositories = document.getElementsByClassName('card-repository');
var games = document.getElementsByClassName('card-game');
var publications = document.getElementsByClassName('card-publication');

var cards = document.querySelectorAll('.work-cards a');

var search_bar = document.getElementById("search_input");

function select_all() {
	document.getElementById('all').style.opacity = '1';
	active = 'all';

	for (var i = 0; i < options.length; i++) {
		if (options[i].id != 'all') {
			options[i].style.opacity = 0.75;
		}
	}

	// ENABLE PUBLICATIONS
	for (var i = 0; i < publications.length; i++) {
		publications[i].style.display = 'flex';
	}

	// ENABLE GAMES
	for (var i = 0; i < games.length; i++) {
		games[i].style.display = 'flex';
	}

	// ENABLE REPOSITORIES
	for (var i = 0; i < repositories.length; i++) {
		repositories[i].style.display = 'flex';
	}

	// ENABLE PROJECTS
	for (var i = 0; i < projects.length; i++) {
		projects[i].style.display = 'flex';
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

	// ENABLE PROJECTS
	for (var i = 0; i < projects.length; i++) {
		projects[i].style.display = 'flex';
	}

	// DISABLE REPOSITORIES
	for (var i = 0; i < repositories.length; i++) {
		repositories[i].style.display = 'none';
	}

	// DISABLE GAMES
	for (var i = 0; i < games.length; i++) {
		games[i].style.display = 'none';
	}

	// DISABLE PUBLICATIONS
	for (var i = 0; i < publications.length; i++) {
		publications[i].style.display = 'none';
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

	// ENABLE REPOSITORIES
	for (var i = 0; i < repositories.length; i++) {
		repositories[i].style.display = 'flex';
	}

	// DISABLE PROJECTS
	for (var i = 0; i < projects.length; i++) {
		projects[i].style.display = 'none';
	}

	// DISABLE GAMES
	for (var i = 0; i < games.length; i++) {
		games[i].style.display = 'none';
	}

	// DISABLE PUBLICATIONS
	for (var i = 0; i < publications.length; i++) {
		publications[i].style.display = 'none';
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

	// ENABLE GAMES
	for (var i = 0; i < games.length; i++) {
		games[i].style.display = 'flex';
	}

	// DIABLE REPOSITORIES
	for (var i = 0; i < repositories.length; i++) {
		repositories[i].style.display = 'none';
	}

	// DISABLE PROJECTS
	for (var i = 0; i < projects.length; i++) {
		projects[i].style.display = 'none';
	}

	// DISABLE PUBLICATIONS
	for (var i = 0; i < publications.length; i++) {
		publications[i].style.display = 'none';
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

	// ENABLE PUBLICATIONS
	for (var i = 0; i < publications.length; i++) {
		publications[i].style.display = 'flex';
	}

	// DISABLE GAMES
	for (var i = 0; i < games.length; i++) {
		games[i].style.display = 'none';
	}

	// DIABLE REPOSITORIES
	for (var i = 0; i < repositories.length; i++) {
		repositories[i].style.display = 'none';
	}

	// DISABLE PROJECTS
	for (var i = 0; i < projects.length; i++) {
		projects[i].style.display = 'none';
	}
}

function select_search() {
	active = 'search';

	for (var i = 0; i < options.length; i++) {
		options[i].style.opacity = 0.75;
	}

	var input = document.getElementById("search_input").value.toLowerCase();

	for (var i = 0; i < cards.length; i++) {
		if (cards[i].querySelector(".title").innerHTML.includes(input) == false) {
			cards[i].style.display = 'none';
		}

		else {
			cards[i].style.display = 'flex';
		}
	}
}

search_bar.addEventListener("input", e => {
	select_search();
})

select_all();