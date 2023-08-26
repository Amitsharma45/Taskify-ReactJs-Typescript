"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todoController_1 = require("../Controllers/todoController");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.send('sfsf');
});
router.get('/task', (req, res) => {
    res.send('hi i am task ts app');
});
router.get('/task/:id', (req, res) => {
    res.send('hi i am task ts app');
});
router.post('/addtodo', todoController_1.createTodo);
exports.default = router;
