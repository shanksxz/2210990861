import { Router } from 'express';
import { ApiController } from '../controller/api.controller';

const router = Router();

router.get('/users', ApiController.getUsers);
router.get('/users/:userId/posts', ApiController.getUserPosts);
router.get('/posts/:postId/comments', ApiController.getPostComments);

export default router;
