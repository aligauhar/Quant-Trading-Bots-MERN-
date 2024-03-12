import mongoose from "mongoose";

export const dbConnection = () => {
  const dburl = process.env.MONGODB_URI;
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
