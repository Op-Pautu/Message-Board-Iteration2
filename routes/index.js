const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

router.get("/", (req, res) => {
  res.render("index", { title: "WeChat", messages });
});

router.get("/new", (req, res) => {
  res.render("form", { title: "New Message" });
});

router.post("/new", (req, res) => {
  messages.push({
    text: req.body.message,
    user: req.body.sender,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
