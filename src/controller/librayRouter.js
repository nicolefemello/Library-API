class LibraryController {
  static async createBook(req, res) {
    const book = new Book({
      title: req.body.title,
      author: req.body.author,
      year: req.body.year,
    });

    await book.save();
    res.send(book);
  }

  static async showBooks(req, res) {
    const books = await Book.find();
    res.send("Livros encontrados:" + books);
  }

  static async updateBook(req, res) {
    const book = await Book.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      author: req.body.author,
      year: req.body.year,
    });

    res.send("Livro atualizado com sucesso!");
  }

  static async deleteBook(req, res) {
    const book = await Book.findByIdAndDelete(req.params.id);
    res.send("Livro apagado com sucesso!");
  }
}
