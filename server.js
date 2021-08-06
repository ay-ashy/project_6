const express = require("express");
const db = require("./db/db");
const cors = require("cors");
const app = express();

//built-in middlewares
app.use(express.json());

//third-party middleware
app.use(cors());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
