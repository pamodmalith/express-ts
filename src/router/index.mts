import { Router } from "express";
import type { Request, Response } from "express";
import userRouter from "./user.mjs";

const rootRouter = Router();

rootRouter.get("/", (_: Request, w: Response) => {
  w.send("API is working");
});
rootRouter.use("/user", userRouter);

export default rootRouter;
