// frontendRouter.js
import express from "express";
import frontend_firebase_auth from "../service/firebase.js";

const router = express.Router();

const handlePostRequest = (req, res) => {
 
    res.json({ frontend_firebase_auth });
};

router.post("/", handlePostRequest);

export default router;
