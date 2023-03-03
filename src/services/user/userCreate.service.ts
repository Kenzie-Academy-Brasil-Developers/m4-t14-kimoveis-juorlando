import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { User } from "../../entities";
import { iUser, iUserRerturn, iUsersReturn } from "../../interfaces/user.interfaces";
import { returnUserSchema } from "../../schemas/userSchema";

const createUserService = async (userData: iUser): Promise<iUserRerturn> => {
  
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User = userRepository.create(userData);

  await userRepository.save(user);

  console.log(15, user)

  const newUser = returnUserSchema.parse(user);

  console.log(17, newUser)

  return newUser;
};

export { createUserService };
