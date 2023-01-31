import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();

// middlewares

// connections
mongoose
  .connect(
    `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.vuiorgi.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() =>
    app.listen(5000, () =>
      console.log("Connection Succesfull Listening to localhost Port 5000")
    )
  )
  .catch((err) => console.log(err));

//mongoDb password
//HxJ-PJUq8wngG.L
