const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

// Matches with "/api/books"
// router.route("/")
//   .get(booksController.findAll)
//   .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/saved")
  .get(articlesController.findAll)
  .post(articlesController.create)
  .delete(articlesController.remove);

router
  .route("*")
  .get(articlesController.findAll)

module.exports = router;




//example AJAX call from API
// router.get("/recipes", (req, res) => {
//   axios
//     .get("http://www.recipepuppy.com/api/", { params: req.query })
//     .then(({ data: { results } }) => res.json(results))
//     .catch(err => res.status(422).json(err));
// });

module.exports = router;