var apiFunctions = {
    apiGet: (res) => {
        var friendsFunc = require('../data/friends');
        res.json(friendsFunc);
    },
    apiPost: (req, res) => {
        var friendsFunc = require('../data/friends');
        var newFriend = req.body;
        friendsFunc.push(newFriend);
        console.log(friendsFunc);
    }
};

module.exports = (apiFunctions);