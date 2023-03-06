import { Request, Response } from "express";
import { iUser, iUsersReturn } from "../interfaces/user.interfaces";
import { createUserService } from "../services/user/userCreate.service";
import { retrieveUserService } from "../services/user/userRetrieve.service";

const createUserController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const userData: iUser = request.body;

  const newUser = await createUserService(userData);

  return response.status(201).json(newUser);
};

const retrieveUserController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const getUser: iUsersReturn = await retrieveUserService();

  return response.status(201).json(getUser);
};

export { createUserController, retrieveUserController };
