import {z} from "zod"
import { createUserSchema, returnUserSchema, returnUserSchemaAll } from "../schemas/userSchema"

type iUser = z.infer<typeof createUserSchema>
type iUserReturn = z.infer<typeof returnUserSchema>
type iUsersReturn = z.infer<typeof returnUserSchemaAll>

export {iUser, iUserReturn, iUsersReturn}
