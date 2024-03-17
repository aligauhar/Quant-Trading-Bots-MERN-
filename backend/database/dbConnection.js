import mongoose from "mongoose";
import dotenv from "dotenv";

export const dbConnection = () => {
  dotenv.config({ path: "./config/config.env" });

  const dburl = process.env.MONGODB_URI;
  const dbname = process.env.MONGO_DB_NAME;

  
  mongoose.connect(dburl, {
    dbName: dbname,
  })
    .then(() => {
      console.log("Connected to the database!");
    })
    .catch((err) => {
      console.log(`Some error occurred while connecting to the database: ${err}`);
    });
};
