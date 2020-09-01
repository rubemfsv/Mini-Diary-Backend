"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var dotenv_1 = __importDefault(require("dotenv"));
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
require("./database");
var app = express_1.default();
dotenv_1.default.config();
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(routes_1.default);
app.listen(3333, function () {
    console.log('🚀 Server started on port 3333!');
});
