import { Router } from "express";
import userController from "../controller/user-controller.mjs";

const userRouter = Router();

userRouter.get("/", userController.getUser);

export default userRouter;
