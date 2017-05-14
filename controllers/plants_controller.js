// Plant controller --> Nicole is using this file for getting the plant care data from the stored database
// DEPENDENCIES
var express = require("express");
var db = require("../models");


/***************************************************/
// ROUTES
module.exports = function(app) {
	// GET route for pulling all of the Plants data (from myfolia.com)
	app.get("/api/plants", function(req, res) {
		// Pulling all of the Plant Care data for the specified plant
		db.plant.findOne({
			where: {
				// Dummy data for testing - will pull from plant selected by user in form
				plant_name: "Boston fern"
			}
		})
		.then(function(dbPlant) {
			// If call successful, logging that it was successful
			console.log("Success: Plants data read");
			// Returning a JSON of the Plants data
			res.json(dbPlant);
		})
		.catch(function(err) {
			// If call not successful, throwing the error
			throw err;
		});
	});
};