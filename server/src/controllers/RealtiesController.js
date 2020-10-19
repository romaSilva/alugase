const Owner = require("../models/Owner");
const Realty = require("../models/Realty");
const { Op } = require("sequelize");
const { update } = require("../models/Owner");
const { response } = require("express");

module.exports = {
  async store(req, res) {
    try {
      const { cpf } = req.params;
      const { cep, phone, address, city, state, value, details } = req.body;
      const fileName = req.file.filename;

      const owner = await Owner.findByPk(cpf);

      if (!owner) {
        return res.status(400).json({ error: "Owner not found" });
      }

      const realty = await Realty.create({
        cpf,
        cep,
        phone,
        address,
        city,
        state,
        value,
        details,
        image: `http://localhost:3333/uploads/${fileName}`,
      });

      return res.json(realty);
    } catch (error) {
      console.error(error.message);
      return res.status(500).send("Server Error");
    }
  },

  async index(req, res) {
    try {
      const realties = await Realty.findAll({
        attributes: ["id", "address", "city", "state", "value", "image", "cep"],
      });

      return res.status(200).json(realties);
    } catch (error) {
      console.error(error.message);
      return res.status(500).send("Server Error");
    }
  },

  async show(req, res) {
    try {
      const { search } = req.query;

      const realties = await Realty.findAll({
        attributes: ["id", "address", "city", "state", "value", "image", "cep"],
        where: {
          city: {
            [Op.like]: `%${search}%`,
          },
        },
      });

      return res.status(200).json(realties);
    } catch (error) {
      console.error(error.message);
      return res.status(500).send("Server Error");
    }
  },

  async delete(req, res) {
    try {
      const id = req.params.id;

      const realty = await Realty.findByPk(id);

      if (!realty) {
        return res.status(400).json({ error: "Realty not found" });
      }

      await Realty.destroy({
        where: {
          id,
        },
      });

      return res.json();
    } catch (error) {
      console.error(error.message);
      return res.status(500).send("Server Error");
    }
  },

  async one(req, res) {
    try {
      const id = req.params.id;

      const realty = await Realty.findOne({
        attributes: [
          "id",
          "phone",
          "cep",
          "address",
          "city",
          "state",
          "value",
          "details",
          "image",
        ],
        where: {
          id,
        },
        include: "owner",
      });

      return res.json(realty);
    } catch (error) {
      console.error(error.message);
      return res.status(500).send("Server Error");
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const { cep, phone, address, city, state, value, details } = req.body;

      await Realty.update(
        {
          cep,
          phone,
          address,
          city,
          state,
          value,
          details,
        },
        {
          where: {
            id,
          },
        }
      );

      return res.status(201).res.send("Realty updated");
    } catch (error) {
      console.error(error.message);
      return res.status(500).send("Server Error");
    }
  },
};
