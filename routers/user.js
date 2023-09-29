const express = require("express");
const {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfile,
} = require("../controllers/user_controller");
const { checkAuthentication } = require("../middlewares/jwt_middleware");
const { isAdmin } = require("../middlewares/check_Admin");

// creating router object
const router = express.Router();

//routing
// REgister - Method - POST
router.post("/register", registerController);

//Login POST-Requisr
router.post("/login", loginController);

// Route For Forgot Password
router.post("/forgot-password", forgotPasswordController);

//Protected Routes for user
router.get("/user-auth", checkAuthentication, (req, res) => {
  res.status(200).json({
    ok: true,
  });
});

//Protected Routes for admin
router.get("/admin-auth", checkAuthentication, isAdmin, (req, res) => {
  res.status(200).json({
    ok: true,
  });
});

//Test Routes for JWT
router.get("/test", checkAuthentication, isAdmin, testController);

//update profile
router.put("/update-profile", checkAuthentication, updateProfile);

module.exports = router;
