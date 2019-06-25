const path = require("path");

var routeFunctions = {
    home: (res) => {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    },
    survey: (res) => {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    }
};

module.exports = (routeFunctions);