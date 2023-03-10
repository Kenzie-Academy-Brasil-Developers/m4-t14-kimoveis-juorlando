import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { iUser, iUserReturnWhitoutPassword } from "../../interfaces/user.interfaces";
import { returnUserSchemaWhitoutPassword } from "../../schemas/userSchema";

const createUserService = async (userData: iUser): Promise<iUserReturnWhitoutPassword> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User = userRepository.create(userData);

  await userRepository.save(user);

  const newUser = returnUserSchemaWhitoutPassword.parse(user)

  return newUser;
};

export { createUserService };
