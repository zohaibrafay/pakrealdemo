const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const {
  getLabors,
  getAdminLabors,
  newLabor,
  getSingleLabor,
  updateLabor,
  deleteLabor,
  createLaborReview,
  getLaborReviews,
  deleteReview,
} = require("../controllers/laborController");

const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");

router.route("/labors").get(getLabors);
router.route("/admin/labors").get(getAdminLabors);
router.route("/labor/:id").get(getSingleLabor);

router.route("/labor/new").post(newLabor);

router
  .route("/admin/labor/:id")
  .patch(updateLabor)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteLabor);

router.route("/review").put(isAuthenticatedUser, createLaborReview);
router.route("/reviews").get(isAuthenticatedUser, getLaborReviews);
router.route("/reviews").delete(isAuthenticatedUser, deleteReview);

module.exports = router;
