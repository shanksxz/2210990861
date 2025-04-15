import axios from 'axios';
import { User, Post, ApiResponse } from '@/types';

const api = axios.create({
  baseURL: 'http://localhost:8787/api'
});

export const getTopUsers = async (): Promise<User[]> => {
  const response = await api.get<ApiResponse<User[]>>('/users/top');
  return response.data.data;
};

export const getPosts = async (type: 'popular' | 'latest'): Promise<Post[]> => {
  const response = await api.get<ApiResponse<Post[]>>(`/posts?type=${type}`);
  return response.data.data;
}; 