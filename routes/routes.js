const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const bookController = require("../controllers/homepage");




router.get("/", bookController.homePage);
router.get("/add", bookController.addPage);
router.post("/add", upload.single("image"), bookController.saveBook);
router.get("/edit/:id", bookController.editPage);
router.post("/edit/:id", bookController.updateBook);
router.post("/delete/:id", bookController.deleteBook);

module.exports = router;
