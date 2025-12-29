import { Router } from "express";
import { AuthController } from "../controller/auth.controller";

const router = Router();
let authController = new AuthController();

router.post('/register',authController.registerUser);

export default router;