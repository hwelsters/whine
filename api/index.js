const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const authRoute = require("./routes/auth");

const app = express();
dotenv.config();

// Connect to MongoDB DBaaS
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("CONNECTED TO MONGODB DBaaS"))
  .catch((err) => console.error(err));

// CORS
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());
app.use("/api/auth", authRoute);

app.listen(5000, () => {
  console.log("BACKEND IS LIVE");
});
