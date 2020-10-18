const Owner = require("../models/Owner");

module.exports = {
  async index(req, res) {
    const owners = await Owner.findAll();

    return res.json(owners);
  },

  async store(req, res) {
    const { cpf, name, phone } = req.body;

    const owner = await Owner.create({ cpf, name, phone });

    return res.json(owner);
  },
};
