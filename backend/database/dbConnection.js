import mongoose from "mongoose";
import dotenv from "dotenv";

const dburl = "mongodb+srv://vercel-admin-user-65f051ae20853051a6ca2948:HLS3w2eRwGPCjoua@cluster0.zugp10q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const dbname = process.env.MONGO_DB_NAME;

mongoose.connect(dburl, {
  dbName: "schema",
})
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((err) => {
    console.log(`Some error occurred while connecting to the database: ${err}`);
  });
