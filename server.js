const express = require("express");
const router = require("./routes/index");
const ejs = require("ejs");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", router);
app.set("view engine", "ejs");

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
