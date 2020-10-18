import { Request, Response } from "express";

class OwnersController {
  async create(request: Request, response: Response) {
    console.log(request.body);
    return response.json({ msg: "seccess" });
  }
}

export default OwnersController;
