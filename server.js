const express = require("express");
const db = require("./db/db");
const cors = require("cors");
const app = express();

const productModel = require("./routers/routes/product");
const signUpModel = require("./routers/routes/auth/signUp");
const roleModel = require("./routers/routes/role");
//built-in middlewares
app.use(express.json());

//third-party middleware
app.use(cors());
app.use(productModel);
app.use(signUpModel);
app.use(roleModel);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
