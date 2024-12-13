class LibraryController {

    /* static async createBook(req, res) {
    const newBook = req.body;
    books.push(newBook);
    res.status(201).json({
      message: "Livro criado com sucesso!",
      book: newBook,
    });
  }*/

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

    static async updateBook(req, re)
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
}