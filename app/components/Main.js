// Require React
var React = require("react");

// Sub-components
var Form = require("./children/Saved");
var Results = require("./children/Search");

// Helper for making AJAX requests to our API
var helpers = require("./utils/helpers");

var Main = React.createClass({
	// Return the search term, results, and search history
	getInitialState: function(){
		return { searchTerm: "", results: "", history: [] };
	},

	// The moment the page renders get the History
    componentDidMount: function() {
    // Get the latest history.
	    helpers.getHistory().then(function(response) {
	      console.log(response);
	      if (response !== this.state.history) {
	        console.log("History", response.data);
	        this.setState({ history: response.data });
	      }
	    }.bind(this));
    },
})