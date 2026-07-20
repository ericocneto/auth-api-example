import z from "zod";

const envBodySchema = z.object({
    NODE_ENV: z.enum(['production', 'development', 'test']).default('production'),
    PORT: z.coerce.number().default(3333)
})  

const envParse = envBodySchema.safeParse(process.env)
if (!envParse.success) {
  throw new Error("Invalid environment variables");
}
export const env = envParse.data
