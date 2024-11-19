import express from "express";
import { Login, Logout, signUp } from "../controllers/usercontroller.js";
const router = express.Router()

router.route("/signup").post(signUp)
router.route("/login").post(Login)
router.route("/logout").get(Logout)

export default router