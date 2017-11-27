"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_proc_1 = require("./base.proc");
const newFollow = (followerid, followingid) => {
    return base_proc_1.row('spNewFollow', [followerid, followingid]);
};
const unFollow = (followerid, followingid) => {
    return base_proc_1.empty('spUnfollow', [followerid, followingid]);
};
const getFollowingChirps = (followerid) => {
    return base_proc_1.rows('spGetFollowingChirps', [followerid]);
};
exports.default = {
    newFollow,
    unFollow,
    getFollowingChirps
};
