import { Router } from 'express';
import { newFollow, unFollow, getFollowingChirps } from '../controllers/subs.ctrl';

const router = Router();

router
    .post('/', newFollow)
    .delete('/:id', unFollow)
    .get('/:id', getFollowingChirps)

export default router;