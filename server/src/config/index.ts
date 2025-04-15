import { z } from "zod"; 
import "dotenv/config";

const envSchema = z.object({
  PORT: z.string().default("8787"),
  email: z.string().email(),
  name: z.string(),
  rollNo: z.string(),
  githubUsername: z.string(),
  accessCode: z.string(),
  clientID: z.string(),
  clientSecret: z.string(),
  BASE_URL: z.string(),
  CLIENT_URL: z.string(),
  NODE_ENV: z.enum(["development", "production"]).default("development"),
});

const env = envSchema.parse(process.env);

export const PORT = env.PORT;
export const email = env.email;
export const name = env.name;
export const rollNo = env.rollNo;
export const githubUsername = env.githubUsername;
export const accessCode = env.accessCode;
export const clientID = env.clientID;
export const clientSecret = env.clientSecret;
export const NODE_ENV = env.NODE_ENV;
export const BASE_URL = env.BASE_URL;
export const CLIENT_URL = env.CLIENT_URL;