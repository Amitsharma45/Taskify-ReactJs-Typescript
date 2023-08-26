"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTodo = void 0;
const todoModule_1 = __importDefault(require("../Modules/todoModule"));
const createTodo = (req, res) => {
    const newTodo = new todoModule_1.default({
        _id: req.body._id,
        task: req.body.task,
    });
    newTodo.save()
        .then((data) => {
        res.send({
            status: 200,
            message: "task done succes"
        });
    }).catch((err) => {
        console.log(err);
        res.send({
            message: 'err'
        });
    });
};
exports.createTodo = createTodo;
