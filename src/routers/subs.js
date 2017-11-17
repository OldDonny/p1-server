"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const subs_ctrl_1 = require("../controllers/subs.ctrl");
const router = express_1.Router();
router
    .post('/', subs_ctrl_1.newFollow)
    .delete('/:id', subs_ctrl_1.unFollow)
    .get('/:id', subs_ctrl_1.getFollowingChirps);
exports.default = router;
