const AuthorController = require("../controllers/author.controller")

module.exports = (app) => {
    app.get("/api/message")
    app.get("/api/authors", AuthorController.allAuthors)
    app.get("/api/authors/:id", AuthorController.oneAuthor)
    app.post("/api/authors/new", AuthorController.createAuthor)
    app.put("/api/authors/:id", AuthorController.editJob)
    app.delete("/api/authors/:id", AuthorController.deleteJob)
}