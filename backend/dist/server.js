"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const body_parser_1 = __importDefault(require("body-parser"));
const router_1 = __importDefault(require("./Routers/router"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use((0, morgan_1.default)('dev'));
mongoose_1.default.connect('mongodb://localhost:27017/newts');
mongoose_1.default.connection.once('open', () => {
    console.log('mogodb connected');
});
app.use('/api/v1', router_1.default);
app.get('/', (req, res) => {
    res.send('hi i am ts app');
});
app.listen(3001, () => {
    console.log('Server is running at port 3001');
});
