var path = require("path");

var routeFunctions = {
    home: (res) => {
        res.sendFile(path.join(__dirname, "../../app/public/home.html"));
        res.sendFile(path.join(__dirname, "../../favicon.ico"));
    },
    survey: (res) => {
        res.sendFile(path.join(__dirname, "../../app/public/survey.html"));
    }
};

module.exports = (routeFunctions);