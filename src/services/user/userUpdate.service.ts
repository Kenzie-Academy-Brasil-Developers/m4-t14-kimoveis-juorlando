import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import {
  iUserUpdate,
  iUpdate,
  userUpdate,
} from "../../interfaces/user.interfaces";
import {
  returnUserSchema,
  returnUserUpdateSchema,
} from "../../schemas/userSchema";

const updateUserService = async (
  userData: iUserUpdate,
  userId: number
): Promise<userUpdate> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const oldData: iUserUpdate | null = await userRepository.findOneBy({
    id: userId,
  });

  const user = userRepository.create({
    ...oldData,
    ...userData,
  });

  await userRepository.save(user);

  const newUser: userUpdate = returnUserUpdateSchema.parse(user);

  return newUser;
};

export { updateUserService };
