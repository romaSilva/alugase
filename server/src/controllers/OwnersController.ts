import { Request, Response } from "express";
const Owner = require("../models/Owner");

class OwnersController {
  async create(request: Request, response: Response) {
    const { cpf, name, phone } = request.body;

    const owner = await Owner.create({ cpf, name, phone });

    return response.json(owner);
  }

  // async index(request: Request, response: Response) {}
}

export default OwnersController;
