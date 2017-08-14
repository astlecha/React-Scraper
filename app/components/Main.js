// Require React
var React = require("react");

// Sub-components
var Form = require("./children/Saved");
var Results = require("./children/Search");

// Helper for making AJAX requests to our API
var helpers = require("./utils/helpers");

var Main = React.createClass({
	// Return the search term, results, and search history
	getInitialState: function() {
		return { searchTerm: "", results: "", saved: [] };
	},

	// The moment the page renders get the new Results
    componentDidUpdate: function() {
    	// Run the query for the nyt search
	    helpers.runQuery(this.state.searchTerm).then(function(data) {
	      if (data !== this.state.results) {
	        console.log("Articles", data);
	        this.setState({ results: data });

	        // After we've received the result... then post the search term to our history.
	        helpers.postHistory(this.state.searchTerm).then(function() {
	          console.log("Updated!");

	          // After we've done the post... then get the updated history
	          helpers.getHistory().then(function(response) {
	            console.log("Current History", response.data);

	            console.log("History", response.data);

	            this.setState({ history: response.data });

	          }.bind(this));
	        }.bind(this));
	      }
	    }.bind(this));
	},


})