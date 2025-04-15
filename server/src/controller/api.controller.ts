import { Request, Response } from 'express';
import { ApiService } from '../utils/index';

export class ApiController {
  static async getUsers(req: Request, res: Response) {
    try {
      const startTime = Date.now();
      const users = await ApiService.getUsers();
      const responseTime = Date.now() - startTime;
      
      res.header('X-Response-Time', `${responseTime}ms`);
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch users' });
    }
  }

  static async getUserPosts(req: Request, res: Response) {
    try {
      const startTime = Date.now();
      const { userId } = req.params;
      const posts = await ApiService.getUserPosts(userId);
      const responseTime = Date.now() - startTime;

      res.header('X-Response-Time', `${responseTime}ms`);
      res.json(posts);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch posts' });
    }
  }

  static async getPostComments(req: Request, res: Response) {
    try {
      const startTime = Date.now();
      const { postId } = req.params;
      const comments = await ApiService.getPostComments(postId);
      const responseTime = Date.now() - startTime;

      res.header('X-Response-Time', `${responseTime}ms`);
      res.json(comments);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch comments' });
    }
  }
}
