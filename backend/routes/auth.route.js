import express from "express";
import { login, logout, singnup } from "../controllers/auth.controller.js";

const router = express.Router();

router.get("/signup", singnup);
router.get("/login", login);
router.get("/logout", logout);

export default router;
