import mongoose from "mongoose";

export const dbConnection = () => {
  const dburl = "mongodb+srv://aligauhar:test123@cluster0.zugp10q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
  const dbname = "schema";
  
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
