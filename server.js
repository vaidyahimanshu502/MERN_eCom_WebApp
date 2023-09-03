const express = require("express");
const colors = require("colors"); // For setting colorfull terminals
const morgan = require("morgan"); // For showing APIs requests in console
const { connectMongo } = require("./config/db");
const userRouter = require("./routers/user"); // importing routers [user.js]
const categoryRouter = require("./routers/category");
const productsRouter = require("./routers/products");
const cors = require("cors");
const formidable = require("express-formidable");

//configure dotenv
require("dotenv").config();

//configure database
connectMongo();

//App
const app = express();

//middleware
app.use(cors());
app.use(express.urlencoded());
app.use(express.json()); // Alternative of body-parser
app.use(morgan("dev")); // Using for for development only
// app.use(formidable());

//routes
app.use("/api/v1/user", userRouter); // requiring our routes [MiddleWare]
app.use("/api/v1/category", categoryRouter);
app.use("/api/v1/product", productsRouter);

// Rest APIs jsut for home page testing purpose

app.get("/", (req, res) => {
  res.send("<h1>Welcome to E-com Website!</h1>");
});

// PORT on which app is running
const port = process.env.PORT || 8080;

//listening our port
app.listen(port, () => {
  console.log(
    `Server is running on ${process.env.DEV_MODE} on port :: ${port}`.bgGreen
      .white
  );
});
