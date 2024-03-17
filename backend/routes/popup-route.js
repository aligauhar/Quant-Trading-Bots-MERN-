import express from "express";
import send_popupValidation from "../controller/popupController.js";


const router = express.Router();

router.post("/send", send_popupValidation);

export default router;
