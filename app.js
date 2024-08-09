const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

//HOME PAGE----------
app.get("/", (req, res) => {
  res.render("index");
});

//ABOUT PAGE---------
app.get("/about", (req, res) => {
  res.render("about");
});

//LICENCE PAGE--------

app.get("/licence", (req, res) => {
  res.render("licence")
});

//CONTACT PAGE-------

app.get("/contact", (req, res) => {
  res.render("contact")
});

app.listen(3000);
