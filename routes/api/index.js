const router = require("express").Router();
const bookRoutes = require("./articles");

// Book routes
router.use("/books", bookRoutes);

module.exports = router;
