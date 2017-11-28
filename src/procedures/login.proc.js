"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_proc_1 = require("./base.proc");
const login = (username) => {
    return base_proc_1.row('spGetUserByUsername', [username]);
};
exports.default = {
    login
};
