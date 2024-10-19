import express from "express";
import { addIssueBook, showIssueBook } from "../controller/issueBook.controller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const router = express.Router();

router.route("/post").post(isAuthenticated,addIssueBook);
router.route("/get").get(isAuthenticated,showIssueBook);

export default router;
