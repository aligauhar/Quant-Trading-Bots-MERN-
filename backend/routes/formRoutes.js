import express from "express";
import send_FormValidation from "../controller/formController.js";

const router = express.Router();

router.post("/send", send_FormValidation);

export default router;
