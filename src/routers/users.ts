import { Router } from 'express';
import { all, create, read, update, destroy, login } from '../controllers/users.ctrl'


const router = Router();

router
    .get('/', all)
    .get('/:id', read)
    .delete('/:id', destroy)
    .post('/', create)
    .put('/:id', update)
    .post('/login', login)

    export default router;