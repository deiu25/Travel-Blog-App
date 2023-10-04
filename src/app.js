import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import postRouter from "./routing/post-routes.js";
import cors from "cors";
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import userRoute from "./routing/user-routes.js";
import errorHandler from "./middleware/errorMiddleware.js";

const app = express();
dotenv.config();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);


app.use("/api/users", userRoute);
app.use("/posts", postRouter);

// connections
mongoose
  .connect(
    `mongodb+srv://syntaxseekers:${process.env.MONGODB_PASSWORD}@travel.sgp0uix.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() =>
    app.listen(5000, () =>
      console.log("Connection Succesfull  & Listening to localhost Port 5000")
    )
  )
  .catch((err) => console.log(err));

  app.use(errorHandler);


  //npm run dev