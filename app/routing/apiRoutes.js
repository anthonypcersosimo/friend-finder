var apiFunctions = {
    apiGet: (res) => {
        var friendsFunc = require('../data/friends');
        res.json(friendsFunc);
    },
    apiPost: (req, res) => {
        var friendsFunc = require('../data/friends');
        friendsFunc.push(newFriend);
        console.log(friendsFunc);
        
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 10
        };

        var newFriend = req.body;
        var friendScores = newFriend.scores;
        console.log(friendScores);
        var totalDifference = 0;

        for (i = 0; i < friendsFunc.length; i++) {
            console.log(friendsFunc[i]);
            totalDifference = 0;

            for (j = 0; j < friendsFunc[i].scores[j]; j++) {
                totalDifference += Math.abs(parseInt(friendScores[j]) - parseInt(friendsFunc[i].scores[j]));

                if (totalDifference <= bestMatch.friendDifference) {
                    bestMatch.name = friendsFunc[i].name;
                    bestMatch.photo = friendsFunc[i].photo;
                    bestMatch.friendDifference = totalDifference;
                };
            };
        };

        friendsFunc.push(newFriend);
    }
};

module.exports = (apiFunctions);