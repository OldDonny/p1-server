"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_ctrl_1 = require("../controllers/login.ctrl");
const router = express_1.Router();
router
    .post('/', login_ctrl_1.login);
exports.default = router;
