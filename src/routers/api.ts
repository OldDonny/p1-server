import {Router} from 'express'
import chirps from './chirps'
import users from './users'
import login from './auth'


const router= Router();

router
.use('/chirps', chirps)
.use('/users', users)
.use('/login', login)

export default router