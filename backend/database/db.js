import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.Db);
    console.log("Database Connected");
  } catch (error) {
    console.log(error);
  }
};

// import mongoose from "mongoose";

// const connectDb = async () => {
//   const uri = process.env.Db || "mongodb://localhost:27017/your-database-name";
//   await mongoose.connect(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
//   console.log("MongoDB connected");
// };

// export default connectDb;
