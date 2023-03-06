import { DeepPartial } from "typeorm";
import { z } from "zod";
import {
  createUserSchema,
  returnUserSchema,
  returnUserSchemaAll,
  updateSchema,
  returnUserUpdateSchema,
} from "../schemas/userSchema";

type iUser = z.infer<typeof createUserSchema>;
type iUpdate = z.infer<typeof updateSchema>;
type userUpdate = z.infer<typeof returnUserUpdateSchema>;
type iUserReturn = z.infer<typeof returnUserSchema>;
type iUsersReturn = z.infer<typeof returnUserSchemaAll>;
type iUserUpdate = DeepPartial<iUser>;

export { iUser, iUserReturn, iUsersReturn, iUpdate, iUserUpdate, userUpdate };
