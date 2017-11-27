import { Router } from 'express';
import { newFollow, unFollow, getFollowingChirps, getFollowingUsers } from '../controllers/subs.ctrl';

const router = Router();

router
    .post('/', newFollow)
    .delete('/:id', unFollow)
    .get('/chirps/:id', getFollowingChirps)
    .get('/users/:id', getFollowingUsers)

export default router;