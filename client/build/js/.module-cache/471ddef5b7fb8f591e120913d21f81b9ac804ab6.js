/** @jsx React.DOM */
define(['jquery', 'react', 'moment', 'js/stores/summonerStore.js'], function ($, React, moment, summonerStore) {
	var MatchHistoryPanel = React.createClass({displayName: 'MatchHistoryPanel',
		render: function () {


			
			return React.DOM.div(null, summonerStore.getMatchHistory().games.length);
		}
	});

	return MatchHistoryPanel;
})