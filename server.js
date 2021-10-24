const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const router = express.Router();
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 3001;

const Pic = require("./picModel.js");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "./client/build")));
  // app.use(express.static(path.join(__dirname, "client/build")));
  // app.use("/static", express.static(path.join(__dirname, "client/build")));
}

if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
}

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/", {
  useNewUrlParser: true,
});

app.get("/pics", async (req, res) => {
  const pics = await Pic.find();
  res.send(pics);
});

app.get("/api", (req, res) => {
  res.send("API is working");
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

// get api for obtaining pics
// get router to get pics set up
// split to two pages
// netlify
// heroku
// mongodb+srv://Sean:<password>@cluster0.mgwha.mongodb.net/test
