import { Request, Response } from "express";
import {
  iUser,
  iUsersReturn,
  iUserUpdate,
} from "../interfaces/user.interfaces";
import { createUserService } from "../services/user/userCreate.service";
import { retrieveUserService } from "../services/user/userRetrieve.service";
import { updateUserService } from "../services/user/userUpdate.service";

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

const updateUserController = async (request: Request, response: Response) => {
  const userData: iUserUpdate = request.body;
  const userId: number = parseInt(request.params.id);

  const newData = await updateUserService(userData, userId);

  response.status(201).json(newData);
};

export { createUserController, retrieveUserController, updateUserController };
