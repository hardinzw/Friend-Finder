var path = require("path");

module.exports = function (app) {
    //Route to survey
    app.get("/api/friends", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    })

    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;
        var newScore = 0;
        var total = 0;
        var match = {
            name: "",
            photo: "",
            difference: 10000
        }

        for (var i = 0; i < friendList.length; i++) {
            total = 0;

            for (var j = 0; j < friendList[i].preferences.length; j++) {
                total += Math.abs(friendList[i].preferences[j] - newFriend.preferences[j]);

                if (total <= match.difference) {
                    match.name = friendList[i].name,
                        match.photo = friendList[i].photo,
                        match.difference = total
                }
            };
        };

        friendList.push(newFriend);
        res.json(match);
        console.log(match);
    });
};
