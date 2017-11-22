"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const subs_ctrl_1 = require("../controllers/subs.ctrl");
const router = express_1.Router();
router
    .post('/', subs_ctrl_1.newFollow)
    .delete('/:id', subs_ctrl_1.unFollow)
    .get('/chirps/:id', subs_ctrl_1.getFollowingChirps)
    .get('/users/:id', subs_ctrl_1.getFollowingUsers);
exports.default = router;
