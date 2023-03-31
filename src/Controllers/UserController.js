const UserModel = require("../Models/UserModel");

/**
 * O arquivo routes.js se encarrega de receber as requisições e manda-las p/ cá
 *
 * A Classe controller criada para possuir os metodos referentes
 * a cada requisição que for feita, sendo eles para criar,mostrar, mostrar um,
 * atualizar e deletar registros gravados no banco de dados mongodb
 *
 */
class UserController {
  async create(req, res) {
    const createdUser = await UserModel.create(req.body);
    return res.status(200).json(createdUser);
  }
  async show(req, res) {
    const showUsers = await UserModel.find();
    return res.status(200).json(showUsers);
  }
  async showOne(req, res) {
    const { id } = req.params;
    const showUser = await UserModel.findById(id);
    if (!showUser) {
      return res.status(500).json({ message: "Verifique o Id inserido" });
    }
    return res.status(200).json(showUser);
  }
  async update(req, res) {
    const { id } = req.params;
    const updatedUser = await UserModel.findByIdAndUpdate(id, req.body);
    if (!updatedUser) {
      return res.status(500).json({ message: "Verifique o Id inserido" });
    }
    return res.status(200).json(updatedUser);
  }
  async delete(req, res) {
    const { id } = req.params;
    const deletedUser = await UserModel.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: "Not found" });
    }
    return res.status(200).json(deletedUser);
  }
}

module.exports = new UserController();
