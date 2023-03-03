import { createLoginSchema } from "../schemas/loginSchema";
import { z } from "zod";

type iLoginRequest = z.infer<typeof createLoginSchema>;

export { iLoginRequest };