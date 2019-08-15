var friendList = require("../data/friends");

module.exports = function (app) {
    //Get list of available friends
    app.get("/api/friends", function (req, res) {
        res.json(friendList);
    })
    //Post request used in survey
    app.post("/api/friends", function (req, res) {

        //reveice input details (name, photo, scores)
        var input = req.body;

        //parse for scores
        for (var i = 0; i < input.scores.length; i++) {
            input.scores[i] = parseInt(input.scores[i]);
        };

        var bestIndex = 0;
        var minimumDif = 40;

        for (var i = 0; i < friendList.length; i++) {
            var totalDif = 0;
            for(var j = 0; j < friendList[i].scores.length; j++) {
                var difference = Math.abs(input.scores[j] - friendList[j].scores[j]);
                totalDif += difference;
            }

            if(totalDif < minimumDif) {
                bestIndex = i;
                miniumumDif = totalDif;
            };
        };

        friendList.push(input);
        res.json(friendList[bestIndex]);
    });
};





