const express = require("express");
const cors = require("cors");

const server = express();

server.use(cors({optionsSuccessStatus: 200}));
server.use(express.static("public"));

server.get("/", (req, res) => res.sendFile(__dirname + "views/index.html"));
server.get("/api/hello", (req, res) => res.json({greeting: "Hello there"}));
server.get("/api/timestamp/:date_string?", (req, res) => {
    const dateString = req.params.date_string;
    let dateInput;
    if (dateString) {
        if (dateString.indexOf("-") >= 0) {
            dateInput = new Date(dateString);
        } else {
            dateInput = new Date(Number(dateString));
        }
    } else {
        dateInput = new Date();
    }
    if (dateInput.toUTCString() === "Invalid Date") {
        return res.json({error: "Invalid Date"});
    }
    return res.json({unix: dateInput.getTime(), utc: dateInput.toUTCString()});
});

server.listen(3000, () => console.log("Listening on port 3000"));