import {
  schedulesSchema,
  schedulesSchemaReturn,
} from "../schemas/schedulesSchema";
import { z } from "zod";

type iShedules = z.infer<typeof schedulesSchema>;
type iShedulesReturn = z.infer<typeof schedulesSchemaReturn>;

export { iShedules, iShedulesReturn };
