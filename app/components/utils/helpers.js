// Require axois for making Http requests
var axios = require("axios");

var Article = require("../models/Article");

// NYT API
var nytAPI = "";

// Helper function makes API calls
var helper = {
	runQuery: function(search) {

		var queryURL = "" + nytAPI

		Article.link = queryURL;

		return axios.get(queryURL).then(function(response) {
			if(response.data.results) {

			}
		}
	}
}

getResults()