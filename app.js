const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello from Jenkins CI/CD!");
});

function sum(a, b) {
    return a + b;
}

module.exports = { app, sum };
