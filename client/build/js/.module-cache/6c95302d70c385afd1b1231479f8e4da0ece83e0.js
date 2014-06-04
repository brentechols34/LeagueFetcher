/** @jsx React.DOM */
define(['jquery', 'react', 'moment', 'js/stores/summonerStore.js'], function ($, React, moment, summonerStore) {
	var MatchHistoryPanel = React.createClass({displayName: 'MatchHistoryPanel',
		render: function () {
			return React.DOM.div( {className:"matchHistoryElement margin-s margin-bottom-m"} , 
						React.DOM.div(null, "Champion Played: ", this.props.data.ChampionName),
						React.DOM.div(null, "Date Played: ",  moment(this.props.data.CreateDate).format('MMMM Do YYYY, h:mm:ss a') ),
						React.DOM.div(null, "Game Mode: ",  this.props.data.GameMode ),
						React.DOM.div(null, "IP Earned: ",  this.props.data.IpEarned )
					);
		}
	});

	return MatchHistoryPanel;
})