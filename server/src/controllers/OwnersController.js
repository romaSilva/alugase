const Owner = require("../models/Owner");

module.exports = {
  async store(req, res) {
    try {
      const { cpf, name } = req.body;

      const exists = await Owner.findByPk(cpf);
      if (exists) {
        return res.status(200).json({ message: "CPF already exists" });
      }

      const owner = await Owner.create({ cpf, name });
      return res.status(201).json(owner);
    } catch (error) {
      console.error(error.message);
      return res.status(500).send("Server error");
    }
  },
};
