import axios from 'axios';
import { AuthRequest, AuthResponse, RegisterRequest, RegisterResponse } from '../types/index';
import { BASE_URL, clientID, clientSecret, rollNo, email, accessCode, name } from '../config/index';

export class ApiService {
  private static token: string | null = null;
  private static expiresAt: number = 0;

  private static async getNewToken() {
    try {
      const response = await axios.post<AuthResponse>(
        `${BASE_URL}/auth`,
        {
          clientID,
          clientSecret,
          rollNo,
          email,
          accessCode,
          name
        }
      );
      
      this.token = response.data.access_token;
      this.expiresAt = Math.floor(Date.now() / 1000) + response.data.expires_in - 600;
      return this.token;
    } catch (error) {
      console.error('Token generation failed:', error);
      throw new Error('Failed to generate token');
    }
  }

  private static async ensureValidToken(): Promise<string> {
    const currentTime = Math.floor(Date.now() / 1000);
    if (!this.token || currentTime >= this.expiresAt) {
      await this.getNewToken();
    }
    return this.token!;
  }

  private static async makeRequest<T>(endpoint: string): Promise<T> {
    const token = await this.ensureValidToken();

    const response = await axios.get<T>(`${BASE_URL}${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  }

  static async register(data: RegisterRequest): Promise<RegisterResponse> {
    try {
      const response = await axios.post(`${BASE_URL}/register`, data);
      return response.data;
    } catch (error) {
      throw new Error('Registration failed');
    }
  }

  static async authenticate(data: AuthRequest): Promise<string> {
    try {
      const response = await axios.post<AuthResponse>(`${BASE_URL}/auth`, data);
      this.token = response.data.access_token;
      this.expiresAt = Math.floor(Date.now() / 1000) + response.data.expires_in - 600;
      return this.token;
    } catch (error) {
      throw new Error('Authentication failed');
    }
  }

  static async getUsers() {
    return this.makeRequest('/users');
  }

  static async getUserPosts(userId: string) {
    return this.makeRequest(`/users/${userId}/posts`);
  }

  static async getPostComments(postId: string) {
    return this.makeRequest(`/posts/${postId}/comments`);
  }
} 