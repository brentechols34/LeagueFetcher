/** @jsx React.DOM */
define(['jquery', 'react', 'moment', 'js/stores/summonerStore.js'], function ($, React, moment, summonerStore) {
	var MatchHistoryPanel = React.createClass({displayName: 'MatchHistoryPanel',
		render: function () {
			return React.DOM.div( {style:{'border':'1px solid #000', 'margin-bottom':'10px', 'padding':'5px'}}, 
						React.DOM.div(null, "Champion Played: ", this.props.data.championId),
						React.DOM.div(null, "Date Played: ",  moment(this.props.data.createDate).format('MMMM Do YYYY, h:mm:ss a') ),
						React.DOM.div(null, "Game Mode: ",  this.props.data.gameMode ),
						React.DOM.div(null, "IP Earned: ",  this.props.data.ipEarned )
					);
		}
	});

	return MatchHistoryPanel;
})