import LibraryController from "../controller/libraryController.js";

const libraryRoutesInit =  (app) => {
    app.get("/books", LibraryController.showBooks);
    app.post("/books", LibraryController.createBook);
    app.put("/books/:id", LibraryController.updateBook);
    app.delete("books/:id", LibraryController.deleteBook);
}

export default libraryRoutesInit;