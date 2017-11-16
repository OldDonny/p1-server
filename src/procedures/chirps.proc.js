"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_proc_1 = require("./base.proc");
const all = () => {
    return base_proc_1.rows('spGetChirps');
};
const read = (id) => {
    return base_proc_1.row('spGetChirp', [id]);
};
const create = (userid, message) => {
    return base_proc_1.row('spInsertChirp', [userid, message]);
};
const destroy = (id) => {
    return base_proc_1.empty('spDeleteChirp', [id]);
};
const update = (id, userid, message) => {
    return base_proc_1.rows('spUpdateChirp', [id, userid, message]);
};
exports.default = {
    all,
    create,
    read,
    destroy,
    update
};
