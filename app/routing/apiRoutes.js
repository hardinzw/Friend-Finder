var friendList = require("../data/friends");

module.exports = function (app) {
	app.get("/api/friends", function (req, res) {
		res.json(friendList);
	});

	app.post("/api/friends", function (req, res) {
		var surveyResults = req.body.scores;
		for (var i = 0; i < surveyResults.length; i++) {
			surveyResults[i] = parseInt(surveyResults[i]);
		};

		var bestDifference = 999999;
		var bestMatch = 0;

		for (i = 0; i < friendList.length; i++) {

			var compareDifference = difference(surveyResults, friendList[i].scores);
			console.log("difference between", surveyResults, "and", friendList[i].name, friendList[i].scores, "=", compareDifference);

			if (compareDifference < bestDifference) {
				bestDifference = compareDifference;
				bestMatch = i;
			};
		};

		function difference(array1, array2) {
			var differenceAmount = 0;

			for (var i = 0; i < array1.length; i++) {
				differenceAmount += Math.abs(array1[i] - array2[i]);
			}
			return differenceAmount;
		};

		// send the bestMatch back to the html page in response to the post
		res.send(friendList[bestMatch]);
	});
};





