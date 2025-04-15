export type User = {
  id: string;
  name: string;
  postCount: number;
}

export type Post = {
  id: number;
  userId: string;
  userName: string;
  content: string;
  commentCount: number;
}

export type ApiResponse<T> = {
  data: T;
  metadata: {
    responseTime: string;
    timestamp: string;
    type?: string;
  }
} 