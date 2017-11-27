import { Router } from 'express';
import { all, create, read, update, destroy } from '../controllers/users.ctrl'
import { login } from '../middleware/auth.mw';

const router = Router();

router
    .get('/', all)
    .get('/:id', read)
    .delete('/:id', destroy)
    .post('/', create)
    .put('/:id', update)
    .post('/login', login)

    export default router;