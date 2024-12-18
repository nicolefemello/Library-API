import mongoose from "mongoose";

async function dbConnect() {
    mongoose.connect(
        "mongodb+srv://nicfmello:LLE1oRVxYAfDysc0@library.bpvdk.mongodb.net/?retryWrites=true&w=majority&appName=Library"
      );
      return mongoose.connection;
}

export default dbConnect;