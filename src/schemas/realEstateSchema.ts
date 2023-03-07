import { z } from "zod";

const createAddressSchema = z.object({
  street: z.string(),
  zipCode: z.string().max(8),
  number: z.string().max(7),
  city: z.string(),
  state: z.string().max(2),
});

const createRealEstateSchema = z.object({
  value: z.number().or(z.string()),
  size: z.number().int(),
  address: createAddressSchema,
  categoryId: z.number(),
});

const AddressReturn = createAddressSchema
  .extend({
    id: z.number(),
  })
  .omit({ id: true });

const realEstateReturn = createRealEstateSchema.extend({
  id: z.number(),
  categoryId: z.number().optional(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

const realEstateArray = realEstateReturn.array();

export {
  createRealEstateSchema,
  createAddressSchema,
  realEstateReturn,
  realEstateArray,
  AddressReturn,
};
