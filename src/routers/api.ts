import {Router} from 'express'
import chirps from './chirps'
import users from './users'
import subs from './subs'
import login from './login'



const router= Router();

router
.use('/chirps', chirps)
.use('/users', users)
.use('/subs', subs)
.use('/login',login)

export default router