import { Router } from "express";
import { AuthController } from "../controllers/AuthController";

const authController = new AuthController();

const authRouter = Router();

authRouter.post("/login", authController.handle);
authRouter.get("/check", authController.check);
authRouter.get("/logout", authController.logout);

export { authRouter };
