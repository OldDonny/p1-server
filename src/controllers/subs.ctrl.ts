import { Request, Response, NextFunction } from 'express';
import { procedure } from '../config/db/index';
import procedures from '../procedures/subs.proc';

export const newFollow = (req: Request, res: Response, next: NextFunction) => {
    procedures.newFollow(+req.body.followerid, +req.body.followingid)
        .then((sets) => {
            res.json(sets);
        });
};

export const unFollow = (req: Request, res: Response, next: NextFunction) => {
    procedures.unFollow(+req.body.followerid, +req.body.followingid)
        .then((sets) => {
            res.json(sets);
        });
};

export const getFollowingChirps = (req: Request, res: Response, next: NextFunction) => {
    procedures.getFollowingChirps(+req.body.followerid)
        .then((sets) => {
            res.json(sets);
        });
};