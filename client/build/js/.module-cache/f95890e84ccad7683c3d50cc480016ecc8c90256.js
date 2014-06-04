/** @jsx React.DOM */
define(['jquery', 'react', 'moment', 'js/stores/summonerStore.js', '/js/components/controls/matchHistoryPanel.js'], function ($, React, moment, summonerStore, MatchHistoryPanel) {
	var MatchHistoryView = React.createClass({displayName: 'MatchHistoryView',
		getInitialState : function () {
			return {
				championInputName: '',
				championName: ''
			};
		},

		render: function () {
			var inputArea = React.DOM.div( {className:"flexContainer"}, 
								React.DOM.input( {type:"text", className:"flex1", value:this.state.championInputName, onChange:this.onChange, onKeyDown:this.onKeyDown} ),
								React.DOM.button( {type:"button", className:"flexNone", onClick:this.onClick} , "Search")
							);

			if(this.state.championName !== '') {
				return React.DOM.div(null, 
							React.DOM.h3(null, "League Fetcher"),
							inputArea,
							MatchHistoryPanel( {name:this.state.championName} )
						);
			} else {
				return React.DOM.div( {style:{'width':'400px', 'margin':'200px auto 0'}}, 
							React.DOM.h3(null, "League Fetcher"),
							inputArea
						);
			}
		},

		onChange: function (e) {
			this.setState({ championInputName : e.target.value });
		},

		onKeyDown: function (e) {
			if(e.keyCode === 13) {
				this.setState({ championName : this.state.championInputName });
			}
		},

		onClick: function () {
			this.setState({ championName : this.state.championInputName });
		}
	});

	return MatchHistoryView;
})