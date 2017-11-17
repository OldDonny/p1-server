import { Router } from 'express';
import { all, create, read,update, destroy } from '../controllers/chirps.ctrl';



const router = Router();

router
    .get('/', all)
    .get('/:id', read)
    .post('/', create)
    .put('/', update)
    .delete('/:id', destroy)

export default router;