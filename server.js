const express = require("express");
const mongoose = require("mongoose");

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

app.post("/books", async (req, res) => {
  const book = new Book({
    title: req.body.title,
    author: req.body.author,
    year: req.body.year,
  });

  await book.save();
  res.send(book);
});

app.get("/books", async (req, res) => {
  const books = await Book.find();
  res.send("Livros encontrados:" + books);
});

app.put("/books/:id", async (req, res) => {
  const book = await Book.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
    author: req.body.author,
    year: req.body.year
  });

  res.send("Livro atualizado com sucesso!");
});

app.delete("/books/:id", async (req, res) => {
  const book = await Book.findByIdAndDelete(req.params.id);
  res.send("Livro apagado com sucesso!");
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

    user: nicfmello
    password: LLE1oRVxYAfDysc0
*/
