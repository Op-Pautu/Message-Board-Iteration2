const express = require("express");
const router = require("./routes/index");

const app = express();
const bodyParser = require("body-parser");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", router);
app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
