import express from "express";
import { login, register } from "../controller/user.controller.js";

const router = express.Router();

router.route("/post").post( register);
router.route("/get").post( login);

export default router;
