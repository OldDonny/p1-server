"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const subs_proc_1 = require("../procedures/subs.proc");
exports.newFollow = (req, res, next) => {
    subs_proc_1.default.newFollow(+req.body.followerid, +req.body.followingid)
        .then((sets) => {
        res.json(sets);
    });
};
exports.unFollow = (req, res, next) => {
    subs_proc_1.default.unFollow(+req.body.followerid, +req.body.followingid)
        .then((sets) => {
        res.json(sets);
    });
};
exports.getFollowingChirps = (req, res, next) => {
    subs_proc_1.default.getFollowingChirps(+req.body.followerid)
        .then((sets) => {
        res.json(sets);
    });
};
exports.getFollowingUsers = (req, res, next) => {
    subs_proc_1.default.getFollowingUsers(+req.body.followerid)
        .then((sets) => {
        res.json(sets);
    });
};
