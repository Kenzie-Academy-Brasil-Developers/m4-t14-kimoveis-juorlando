import { z } from "zod";
import { categoriesReturn } from "./categoriesSchema";

const createAddressSchema = z.object({
  street: z.string().min(1).max(8),
  zipCode: z.string().min(1).max(8),
  number: z.string().min(1).max(7).nullish(),
  city: z.string().min(1),
  state: z.string().max(2),
});
const AddressReturn = createAddressSchema.extend({
  id: z.number(),
});

const createRealEstateSchema = z.object({
  value: z.number().or(z.string()),
  size: z.number().positive().int(),
  categoryId: z.number(),
  address: AddressReturn,
});

const createRealEstateSchemaPost = z.object({
  value: z.number().or(z.string()),
  size: z.number().positive().int(),
  categoryId: z.number(),
  address: createAddressSchema,
});

const realEstateReturn = createRealEstateSchema.extend({
  id: z.number(),
  categoryId: z.number().nullish(),
  sold: z.boolean().default(false),
  createdAt: z.string(),
  updatedAt: z.string(),
});

const realEstateReturn2 = createRealEstateSchemaPost.extend({
  id: z.number(),
  categoryId: z.number().nullish(),
  sold: z.boolean().default(false),
  createdAt: z.string(),
  updatedAt: z.string(),
  category: z.object({id: z.number(), name: z.string()})
}).omit({sold: true})

const realEstateArray = realEstateReturn.array();

export {
  createRealEstateSchema,
  createAddressSchema,
  realEstateReturn,
  realEstateArray,
  AddressReturn,
  realEstateReturn2,
  createRealEstateSchemaPost
};
