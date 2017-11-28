import { Router } from 'express';
import { all, create, read, update, destroy, } from '../controllers/users.ctrl'


const router = Router();

router
    .get('/', all)
    .get('/:id', read)
    .delete('/:id', destroy)
    .post('/', create)
    .put('/:id', update)
    

    export default router;