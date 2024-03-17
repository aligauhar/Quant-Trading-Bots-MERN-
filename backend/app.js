import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { errorMiddleware } from "./middlewares/formError.js";
import reservationRouter from "./routes/formRoutes.js";
import popupRouter from "./routes/popup-route.js";
import serviceRouter from "./routes/serviceRoute.js";
import { dbConnection } from "./database/dbConnection.js";

const app = express();
dotenv.config({ path: "./config/config.env" });

// Enable CORS middleware to allow all origins
app.use(cors());


app.use("/api/firebase-config",  serviceRouter);


app.use("/api/firebase-config", serviceRouter);
app.use("/api/v1/form", reservationRouter);
app.use("/api/v1/popup", popupRouter);

app.get("", (req, res, next) => {
  return res.status(200).json({
    success: true,
    message: "HELLO WORLD AGAIN"
  });
});

dbConnection();

app.use(errorMiddleware);

export default app;
