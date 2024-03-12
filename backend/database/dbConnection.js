import mongoose from "mongoose";
export const dbConnection = () => {

var dburl = "mongodb+srv://aligauhar:test123@cluster0.zugp10q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
var dbname = "schema";
  mongoose.connect(dburl, {
    dbName:dbname,
  })
  .then(() => {
      console.log("Connected to database!")
    })
  .catch((err) => {
      console.log(`Some error occured while connecing to database: ${err}`)
    });
};
