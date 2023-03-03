import { Request, Response } from "express";
import { iUser, iUserRerturn } from "../interfaces/user.interfaces";
import { createUserService } from "../services/user/userCreate.service";

const createUserController = async (request: Request, response: Response): Promise<Response> => {
  const userData: iUser = request.body;

  const newUser = await createUserService(userData);

  return response.status(201).json(newUser);
};

export { createUserController };
