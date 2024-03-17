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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Allowing API access for frontend URL only
const restrictToAllowedOrigin = (req, res, next) => {
  const requestOrigin = req.headers.origin;
  if (requestOrigin === 'https://quant-trading-bots-mern.vercel.app/api/v1/form') {
    // If the request comes from the allowed origin, proceed
    next();
  } else {
    // If the request doesn't come from the allowed origin, respond with a 403 Forbidden status
    res.status(403).json({ message: 'Forbidden' });
  }
};

// Apply the middleware for each route that needs to be restricted
app.use("/api/v1/form", restrictToAllowedOrigin, reservationRouter);

app.use("/api/firebase-config", serviceRouter);
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
