const express = require("express");
const router = express.Router();

const {
  getVehicles,
  getAdminVehicles,
  newVehicle,
  getSingleVehicle,
  updateVehicle,
  deleteVehicle,
  createVehicleReview,
  getVehicleReviews,
  deleteReview,
} = require("../controllers/vehicleController");

const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");

router.route("/vehicles").get(getVehicles);
router.route("/admin/vehicles").get(getAdminVehicles);
router.route("/vehicled/:id").get(getSingleVehicle);

router.route("/vehicle/new").post(newVehicle);

router
  .route("/admin/vehicle/:id")
  .patch(updateVehicle)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteVehicle);

router.route("/reviewvh").put(isAuthenticatedUser, createVehicleReview);
router.route("/reviewsvh").get(isAuthenticatedUser, getVehicleReviews);
router.route("/reviewsvh").delete(isAuthenticatedUser, deleteReview);

module.exports = router;