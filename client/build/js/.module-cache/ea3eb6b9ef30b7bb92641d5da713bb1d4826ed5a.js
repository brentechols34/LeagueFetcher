define(['jquery'], function ($) {
	
	function getMatchHistory (name) {
		var waiting = true;
		var result;

		$.get('/api/summoner/matchHistory?name=' + name, function (result) {

		});

		while(waiting) {

		}

		return 
	}

	return {

	}
});