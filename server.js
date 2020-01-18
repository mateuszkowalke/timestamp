const express = require("express");
const cors = require("cors");

const server = express();

server.use(cors({optionsSuccessStatus: 200}));
server.use(express.static("public"));

server.get("/", (req, res) => res.sendFile(__dirname + "views/index.html"));
server.get("/api/hello", (req, res) => res.json({greeting: "Hello there"}));

server.listen(3000, () => console.log("Listening on port 3000"));