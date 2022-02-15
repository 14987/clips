import { Router } from "express";
const mainRouter = Router();
import categoryRouter from "./categoryRouter.js";
import authRouter from "./authRouter.js";
import userRouter from "./userRouter.js";
import videoRouter from "./videoRouter.js";
import commentsRouter from './commentsRouter.js';
// To Get List Of students
mainRouter.route("/").get(function (req, res) {
  res.json("hello world");
});

mainRouter.use("/category", categoryRouter);
mainRouter.use("/authenticate", authRouter);
mainRouter.use("/user", userRouter);
mainRouter.use("/video", videoRouter);
mainRouter.use("/comment", commentsRouter);
export default mainRouter;
