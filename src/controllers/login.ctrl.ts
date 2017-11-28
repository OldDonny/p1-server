import procedures from '../procedures/login.proc'
import { Request, Response, NextFunction } from 'express';
import { procedure } from '../config/db/index';

export const login = (req: Request, res: Response, next:NextFunction) => {
    procedures.login(req.body.username)
        .then((user) => {
            if(req.body.password !== user.password){
                throw new Error();
            }
            delete user.password

            res.json(user);

            
        });
};