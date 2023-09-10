const express = require("express");
const router = express.Router();
const { checkAuthentication } = require("../middlewares/jwt_middleware");
const { isAdmin } = require("../middlewares/check_Admin");
const {
  createProduct,
  getProductController,
  getSingleProduct,
  getProductPhoto,
  deleteProduct,
  updataProduct,
  productFilterController,
} = require("../controllers/product_controlller");
const formidable = require("express-formidable");

// For creating product
router.post(
  "/create-product",
  checkAuthentication,
  isAdmin,
  formidable(),
  createProduct
);

//Get products
router.get("/get-product", getProductController);

// getting single product
router.get("/get-single-product/:slug", getSingleProduct);

//getting photo
router.get("/product-photo/:pid", getProductPhoto);

//delete product
router.delete(
  "/delete-product/:pid",
  checkAuthentication,
  isAdmin,
  deleteProduct
);

// update product
router.put(
  "/update-product/:id",
  checkAuthentication,
  isAdmin,
  formidable(),
  updataProduct
);

// Filter Products
router.post("/product-filter", productFilterController);

module.exports = router;
