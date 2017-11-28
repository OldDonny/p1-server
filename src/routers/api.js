"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const chirps_1 = require("./chirps");
const users_1 = require("./users");
const subs_1 = require("./subs");
const login_1 = require("./login");
const router = express_1.Router();
router
    .use('/chirps', chirps_1.default)
    .use('/users', users_1.default)
    .use('/subs', subs_1.default)
    .use('/login', login_1.default);
exports.default = router;
