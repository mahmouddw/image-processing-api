"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//This file is the index file for all app routes
var express_1 = __importDefault(require("express"));
var image_1 = __importDefault(require("./api/image"));
var routes = express_1.default.Router();
routes.use('/image', image_1.default);
exports.default = routes;
