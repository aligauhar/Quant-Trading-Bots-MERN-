import mongoose from "mongoose";
import dotenv from "dotenv";

const dburl = process.env.MONGO_URL;
const dbname = process.env.MONGO_DB_NAME;

mongoose.connect(dburl, {
  dbName: dbname,
})
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((err) => {
    console.log(`Some error occurred while connecting to the database: ${err}`);
  });
