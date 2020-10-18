const Owner = require("../models/Owner");
const Realty = require("../models/Realty");

module.exports = {
  async store(req, res) {
    const { cpf } = req.params;
    const { cep, address, city, state, value, details } = req.body;

    const owner = await Owner.findByPk(cpf);

    if (!owner) {
      return res.status(400).json({ error: "User not found" });
    }

    const realty = await Realty.create({
      cpf,
      cep,
      address,
      city,
      state,
      value,
      details,
    });

    return res.json(realty);
  },
};
