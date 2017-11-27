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

};