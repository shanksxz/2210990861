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

 static async getTopUsers(req: Request, res: Response) {
    try {
      const startTime = Date.now();
      const users = await ApiService.getTopUsers();
      const responseTime = Date.now() - startTime;
      
      res.header('X-Response-Time', `${responseTime}ms`);
      res.json({
        data: users,
        metadata: {
          responseTime: `${responseTime}ms`,
          timestamp: new Date().toISOString()
        }
      });
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch top users' });
    }
  }

  static async getPosts(req: Request, res: Response) {
    try {
      const startTime = Date.now();
      console.log(req.query.type);
      const type = req.query.type as 'popular' | 'latest';
      console.log(type);
      
      if (!type || !['popular', 'latest'].includes(type)) {
         res.status(400).json({ error: 'Invalid post type. Must be "popular" or "latest"' });
         return;
      }

      const posts = await ApiService.getPosts(type);
      const responseTime = Date.now() - startTime;

      res.header('X-Response-Time', `${responseTime}ms`);
      res.json({
        data: posts,
        metadata: {
          responseTime: `${responseTime}ms`,
          timestamp: new Date().toISOString(),
          type
        }
      });
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch posts' });
    }
  }
}
