const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

// MONGOOSE
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("CONNECTED TO MONGO DB"))
  .catch((err) => console.error(err));

// CORS
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.listen("5000", () => {
  console.log("BACKEND IS LIVE");
});
