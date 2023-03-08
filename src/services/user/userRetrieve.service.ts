import { Request, Response } from "express";
import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { User } from "../../entities";
import { iUsersReturn } from "../../interfaces/user.interfaces";
import { returnUserSchemaAll } from "../../schemas/userSchema";

const retrieveUserService = async (): Promise<iUsersReturn> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const listUsers: Array<User> = await userRepository.find({
    withDeleted: true
  });

  const users = returnUserSchemaAll.parse(listUsers);

  return users;
};

export { retrieveUserService };
