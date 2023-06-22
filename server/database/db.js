import mongoose from "mongoose";
const Connection = async () => {
  try {
    const URL =
      "mongodb+srv://dheeraj_05:dheeraj@0511@cluster0.d1i4dqi.mongodb.net/?retryWrites=true&w=majority";
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected");
  } catch (error) {
    console.log("error occured ", error);
  }
};
export default Connection;