import jwt from "jsonwebtoken";
import { compare } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../errors";
import { iLoginRequest } from "../../interfaces/login.intefaces";
import "dotenv/config";
import { Repository } from "typeorm";

const createLoginService = async (
  loginData: iLoginRequest
): Promise<string> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOneBy({
    email: loginData.email,
  });

  if (!user) {
    throw new AppError("Wrong email or password", 401);
  }

  const passwordMatch = await compare(loginData.password, user.password);

  if (!passwordMatch) {
    throw new AppError("Wrong email or password", 401);
  }

  const token = jwt.sign(
    {
      name: user.name.toString(),
      admin: user.admin.toString(),
    },
    process.env.SECRET_KEY!,
    {
      expiresIn: process.env.EXPIRES_IN!,
      subject: user.id.toString(),
    }
  );

  return token;
};

export default createLoginService;
