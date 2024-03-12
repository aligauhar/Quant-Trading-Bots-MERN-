import mongoose from "mongoose";
import dotenv from "dotenv";

const dburl = "mongodb+srv://aligauhar:test123@cluster0.zugp10q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(dburl, {
  dbName: "schema",
})
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((err) => {
    console.log(`Some error occurred while connecting to the database: ${err}`);
  });
