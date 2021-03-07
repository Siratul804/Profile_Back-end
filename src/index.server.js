const express = require("express");
const app = express();
const env = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

//routes

const userRoutes = require("./Routes/User");

//environment variable or you can say consstants
env.config();

//mongodb conneciton

mongoose
  .connect("mongodb://127.0.0.1:27017/PortfolioUserMassage", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Database connected");
  });

app.use(express.json());
app.use(cors());

app.use("/api", userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
