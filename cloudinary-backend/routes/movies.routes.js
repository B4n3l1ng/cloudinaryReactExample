const Movie = require("../models/Movie.model");

const router = require("express").Router();

const uploader = require("../middlewares/cloudinary.config");

router.get("/movies", async (req, res, next) => {
  try {
    const allMovies = await Movie.find({});
    res.status(200).json(allMovies);
  } catch (error) {
    console.log(error);
  }
});

//TODO: post route that receives the image file, title and description strings, and through the middleware,
//uploads file to cloudinary, returns a string with the link, and creates a new movie in the database
router.post("/movies", uploader.single("imageUrl"), async (req, res, next) => {
  //TODO
  const { title, description } = req.body;
  const imageUrl = req.file.path;
  try {
    const newMovie = await Movie.create({ title, description, imageUrl });
    res.status(201).json(newMovie);
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
