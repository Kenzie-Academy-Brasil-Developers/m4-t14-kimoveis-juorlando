import {z} from "zod";
import { hashSync } from "bcryptjs";

const createUserSchema = z.object({
    name: z.string().min(3).max(45),
    email: z.string().min(10).max(45),
    password: z.string().min(4).max(120).transform((pass) => {
        return hashSync(pass, 10)
    })
})

const returnUserSchema = createUserSchema.extend({
    id: z.number(),
    admin: z.boolean().default(false),
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.string().nullable()
}).omit({password: true})

const returnUserSchemaAll = returnUserSchema.array()

export {createUserSchema, returnUserSchema, returnUserSchemaAll}

