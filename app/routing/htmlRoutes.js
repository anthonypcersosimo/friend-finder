var routeFunctions = {
    export home: () => {
        res.sendFile(path.join(__dirname, "app/public/home.html"));
        res.sendFile(path.join(__dirname, "favicon.ico"));
    },
    export survey: () => {
        res.sendFile(path.join(__dirname, "app/public/survey.html"));
    }
};