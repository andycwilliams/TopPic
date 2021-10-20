const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const router = express.Router();

const PORT = process.env.PORT || 3000;

const Pic = require("./picModel.js");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/", {
  useNewUrlParser: true,
});

router.get("/pics", async (req, res) => {
  const pics = await Pic.find();
  res.send(pics);
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

<<<<<<< HEAD
// from Maryus:
// db.once('open', () => {
//   app.listen(PORT, () => {
//     console.log(`API server running on port ${PORT}!`);
//     console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
//   });
// });



=======
>>>>>>> main
// get api for obtaining pics
// get router to get pics set up
// split to two pages
// netlify
// heroku
// mongodb+srv://Sean:<password>@cluster0.mgwha.mongodb.net/test
