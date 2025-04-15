export type RegisterRequest = {
  email: string;
  name: string;
  rollNo: string;
  githubUsername: string;
  collegeName: string;
  accessCode: string;
}

export type RegisterResponse = {
  email: string;
  rollNo: string;
  accessCode: string;
  clientId: string;
  clientSecret: string;
}

export type AuthRequest = {
  email: string;
  name: string;
  rollNo: string;
  accessCode: string;
  clientId: string;
  clientSecret: string;
}

export type AuthResponse = {
  token_type: string;
  access_token: string;
  expires_in: number;
}

export type User = {
  id: string;
  name: string;
}

export type Post = {
  id: number;
  userId: number;
  content: string;
}

export type Comment = {
  id: number;
  postId: number;
  content: string;
}