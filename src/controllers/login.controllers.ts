import { Request, Response } from "express";
import { iLoginRequest } from "../interfaces/login.intefaces";
import createLoginService from "../services/login/login.service";

const createLoginController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const loginData: iLoginRequest = request.body;

  const token = await createLoginService(loginData);

  return response.json({ token: token });
};

export { createLoginController };
