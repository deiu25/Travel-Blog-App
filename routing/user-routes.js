import { Router } from "express";
import { getAllUsers } from "../controllers/user-controllers";

const userRouter = Router();

userRouter.get("/", getAllUsers);
//userRouter.post("/signup", signup);

export default userRouter;
