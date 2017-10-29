const router = require("express").Router();
const booksController = require("../../controllers/articlesController");

// Matches with "/api/books"
// router.route("/")
//   .get(booksController.findAll)
//   .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/saved")
  .get(articlesController.findAll)
  .put(articlesController.update)
  .delete(articlesController.remove);

module.exports = router;
