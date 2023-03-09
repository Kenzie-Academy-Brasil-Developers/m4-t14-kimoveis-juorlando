import { z } from "zod";

const schedulesSchema = z.object({
  date: z.string(),
  hour: z.string(),
  realEstateId: z.number().int()
});

const schedulesSchemaReturn = schedulesSchema.extend({
  id: z.number(),
});

export { schedulesSchema, schedulesSchemaReturn };
