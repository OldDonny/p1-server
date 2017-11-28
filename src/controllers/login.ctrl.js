"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const login_proc_1 = require("../procedures/login.proc");
exports.login = (req, res, next) => {
    login_proc_1.default.login(req.body.username)
        .then((user) => {
        if (req.body.password !== user.password) {
            throw new Error();
        }
        delete user.password;
        res.json(user);
    });
};
