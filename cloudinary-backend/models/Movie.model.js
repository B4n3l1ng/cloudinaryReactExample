const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const movieSchema = new Schema({
  title: String,
  description: String,
  imageUrl: String,
});

const Movie = model("Movie", movieSchema);

module.exports = Movie;
