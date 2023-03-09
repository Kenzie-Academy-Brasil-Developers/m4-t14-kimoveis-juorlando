import { z } from "zod";

const createUserSchema = z.object({
  name: z.string().min(3).max(45),
  email: z.string().min(10).max(45),
  admin: z.boolean().optional().default(false),
  password: z.string().min(4).max(120),
});

const updateSchema = z.object({
  name: z.string().min(3).max(45).optional(),
  email: z.string().min(10).max(45).optional(),
  password: z.string().min(4).max(120).optional(),
});

const returnUserUpdateSchema = updateSchema
  .extend({
    id: z.number().optional(),
    admin: z.boolean().optional(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
    deletedAt: z.string().nullable().optional(),
  })
  .omit({ password: true });

const returnUserSchema = createUserSchema.extend({
  id: z.number(),
  admin: z.boolean(),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().nullable(),
});

const returnUserSchemaWhitoutPassword = createUserSchema
  .extend({
    id: z.number(),
    admin: z.boolean(),
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.string().nullable(),
  })
  .omit({ password: true });

const returnUserSchemaAll = returnUserSchemaWhitoutPassword.array();

export {
  createUserSchema,
  returnUserSchema,
  returnUserSchemaAll,
  updateSchema,
  returnUserUpdateSchema,
  returnUserSchemaWhitoutPassword,
};
