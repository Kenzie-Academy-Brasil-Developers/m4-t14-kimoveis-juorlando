import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import {
  iUser,
  iUserReturn,
  iUsersReturn,
} from "../../interfaces/user.interfaces";
import { returnUserSchema } from "../../schemas/userSchema";

const createUserService = async (userData: iUser): Promise<iUserReturn> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User = userRepository.create(userData);

  await userRepository.save(user);

  const newUser = returnUserSchema.parse(user);

  return newUser;
};

export { createUserService };
