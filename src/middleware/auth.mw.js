"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const expires = 1000 * 60 * 60;
const usersPath = path.join(__dirname, '..', 'users.json');
exports.login = (req, res, next) => {
    // const { user, password } = req.body;
    // const users = (fs.readFileSync(usersPath, 'utf-8'));
    // const found: models.IUser = users.find((u: models.IUser): boolean => {
    //     if (u.user === user) {
    //         return true;
    //     }
    //     return false;
    // });
    // if (!isNil(found) && checkPassword(password, <string>found.password)) {
    //     res.status(200).json({
    //         idToken: generateToken(<string>found.id),
    //         expiresIn: expires
    //     });
    // } else {
    //     res.sendStatus(401);
    // }
};
