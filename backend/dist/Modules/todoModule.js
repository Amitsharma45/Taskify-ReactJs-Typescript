"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const todoSchema = new mongoose_1.default.Schema({
    _id: {
        type: Number,
        required: true
    },
    task: {
        type: String,
        required: true
    }
}, { timestamps: true });
const todo = mongoose_1.default.model('todots', todoSchema);
exports.default = todo;
