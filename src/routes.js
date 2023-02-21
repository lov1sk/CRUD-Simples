const express = require("express");
const routes = express.Router();
const UserController = require("./Controllers/UserController");

/**
 * Rotas que sõa ouvidas no localhost:3000/
 */

routes.get("/", (req, res) => {
  console.log("Bateu aqui a requisição get");
  return res.status(200).json({ message: "OK" });
});
routes.post("/create", UserController.create);
routes.get("/show", UserController.show);
routes.get("/show/:id", UserController.showOne);
routes.put("/update/:id", UserController.update);
routes.delete("/delete/:id", UserController.delete);

module.exports = routes;
