"use strict";

const express = require("express");

const app = express();

const port = 3000;
const host = "localhost";

app.get("/", (req, res) =>
	res.send("<h1>Testing CI/CD pipeline with a simple Node.js application</h1>")
);

app.listen(port, host, () => console.log(`Listening at ${host}:${port}`));
