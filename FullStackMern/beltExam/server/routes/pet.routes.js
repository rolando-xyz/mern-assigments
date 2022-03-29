const PetController = require("../controllers/pet.controller")

module.exports = (app) => {
    app.get("/api/message")
    app.get("/api/pets", PetController.allPets)
    app.get("/api/pets/:id", PetController.onePet)
    app.post("/api/pets/new", PetController.createPet)
    app.put("/api/pets/:id", PetController.editPet)
    app.delete("/api/pets/:id", PetController.deletePet)
}