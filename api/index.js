const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const port = process.env.PORT || 5000;

const authRoute = require("./routes/auth");
const postsRoute = require("./routes/posts");

const app = express();
dotenv.config();

// Connect to MongoDB DBaaS
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("CONNECTED TO MONGODB CLOUD"))
  .catch((err) => console.error(err));

// CORS
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/posts", postsRoute);

app.listen(port, () => {
  console.log(`BACKEND IS LIVE ON PORT ${port}`);
});
