import { z } from "zod";
import { config } from "dotenv";

config({ path: ".env.local"});

const env = z.object({
    PORT: z.string(),
    CLIENT_URL: z.string()
})

const envSchema = env.parse(process.env);
export const PORT = envSchema.PORT;
export const CLIENT_URL = envSchema.CLIENT_URL;
