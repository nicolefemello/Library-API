const express = require("express");
const mongoose = require("mongoose");
import app from './src/app.js';

const app = express();
app.use(express.json());

//MODEL
const Book = mongoose.model("Book", {
  title: String,
  author: String,
  year: Number,
});

app.get("/", (req, res) => {
  res.send("Welcome to the library!");
});

app.listen(3000, () => {
  mongoose.connect(
    "mongodb+srv://nicfmello:LLE1oRVxYAfDysc0@library.bpvdk.mongodb.net/?retryWrites=true&w=majority&appName=Library"
  );
  console.log("Servidor rodando");
});

/*
    1. npm init 
    2. npm i express 
    3. npm nodemon
    4. npm i mongoose
    
*/
