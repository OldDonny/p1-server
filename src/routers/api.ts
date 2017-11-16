import {Router} from 'express'
import chirps from './chirps'
import users from './users'


const router= Router();

router
.use('/chirps', chirps)
.use('/users', users)

export default router