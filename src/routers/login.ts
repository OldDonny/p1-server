import { Router } from 'express';
import { login } from '../controllers/login.ctrl'

const router = Router();

router
    .post('/', login)


export default router;