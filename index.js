const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();

app.use(express.static("public"));

// Render the index.html when the user visit our project port
app.get("/", (req, res) => {
  res.sendFile("/index.html");
});

//add the router
app.use("/", router);
app.listen(process.env.port || 3000);
