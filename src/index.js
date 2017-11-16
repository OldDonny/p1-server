"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const bp = require("body-parser");
const api_1 = require("./routers/api");
const app = express();
app
    .disable('x-powered-by')
    .use((req, res, next) => {
    res.header('Acess-Control-Allow-Origin', "*");
    res.header('Acess-Control-Allow-Methods', 'GET,POST,UPDATE,DELETE,PUT');
    res.header('Acess-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
})
    .use(bp.json())
    .use(bp.urlencoded({ extended: true }))
    .use('/api', api_1.default)
    .use(express.static(path.join(__dirname + '/../dist')))
    .get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../dist/index.html'));
});
app.listen(process.env.PORT || 3000, () => {
    console.log(`listening on port ${process.env.PORT || 3000}`);
});
