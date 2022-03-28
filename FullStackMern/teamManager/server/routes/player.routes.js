const PlayerController = require("../controllers/player.controller")

module.exports = (app) => {
    app.get("/api/message")
    app.get("/api/players", PlayerController.allPlayers)
    app.get("/api/players/:id", PlayerController.onePlayer)
    app.post("/api/players/new", PlayerController.createPlayer)
    app.put("/api/players/:id", PlayerController.editPlayer)
    app.delete("/api/players/:id", PlayerController.deletePlayer)
}