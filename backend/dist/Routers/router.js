"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todoController_1 = require("../Controllers/todoController");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.send('sfsf');
});
router.post('/addtodo', todoController_1.createTodo);
exports.default = router;
