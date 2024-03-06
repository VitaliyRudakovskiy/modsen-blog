import { z } from 'zod';

const contactScheme = z
  .object({
    name: z.string().min(2, 'invalidNameMin').max(20, 'invalidNameMax'),
    email: z.string().email('invalidEmail'),
    topic: z.string(),
    message: z.string().min(20, 'invalidMessage'),
  })
  .required();

export type TypeContact = z.infer<typeof contactScheme>;

export default contactScheme;
