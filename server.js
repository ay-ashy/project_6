const express = require("express");
const db = require("./db/db");
const cors = require("cors");
const app = express();

const categoryModel = require("./routers/routes/category");
const productModel = require("./routers/routes/product");
const signUpModel = require("./routers/routes/auth/signUp");
const roleModel = require("./routers/routes/role");
//const userModel = require("./routers/routes/user");
//const favoriteModel = require("./routers/routes/favorite");
//const cartModel = require("./routers/routes/cart");
//built-in middlewares
app.use(express.json());

//third-party middleware
app.use(cors());
app.use(productModel);
app.use(categoryModel);
app.use(signUpModel);
app.use(roleModel);
//app.use(userModel);
//app.use(favoriteModel);
//app.use(cartModel);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
