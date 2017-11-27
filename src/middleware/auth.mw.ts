import { Request, Response, NextFunction } from 'express';
import * as fs from 'fs';
import * as path from 'path';
import { isNil } from 'ramda';
import { checkPassword } from './bcrypt.mw';
const expires = 1000 * 60 * 60;
const usersPath = path.join(__dirname, '..', 'users.json');
import { generateToken } from './jwt.mw';
import { procedure } from '../config/db/index';

export const login = (req: Request, res: Response, next: NextFunction) => {
    // const { user, password } = req.body;
    // const users = (fs.readFileSync(usersPath, 'utf-8'));
    // const found: models.IUser = users.find((u: models.IUser): boolean => {
    //     if (u.user === user) {
    //         return true;
    //     }

    //     return false;
    // });

    // if (!isNil(found) && checkPassword(password, <string>found.password)) {
    //     res.status(200).json({
    //         idToken: generateToken(<string>found.id),
    //         expiresIn: expires
    //     });
    // } else {
    //     res.sendStatus(401);
    // }
};