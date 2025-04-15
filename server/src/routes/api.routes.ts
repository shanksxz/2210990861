import { Router } from 'express';
import { ApiController } from '../controller/api.controller';

const router = Router();

router.get('/users/top', ApiController.getTopUsers);
router.get('/posts', ApiController.getPosts);

export default router;
