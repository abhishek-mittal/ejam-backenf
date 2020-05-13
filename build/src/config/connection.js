"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var env_1 = __importDefault(require("@config/env"));
var connectOptions = {
    autoReconnect: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 1000,
    useNewUrlParser: true,
    useUnifiedTopology: true
};
var MONGO_URI = "" + env_1.default.database.MONGODB_URI + env_1.default.database.MONGODB_DB_MAIN;
exports.db = mongoose_1.createConnection(MONGO_URI, connectOptions);
// handlers
exports.db.on('connecting', function () {
    console.log('\x1b[32m', 'MongoDB :: connecting');
});
exports.db.on('error', function (error) {
    console.log('\x1b[31m', "MongoDB :: connection " + error);
    mongoose_1.disconnect();
});
exports.db.on('connected', function () {
    console.log('\x1b[32m', 'MongoDB :: connected');
});
exports.db.once('open', function () {
    console.log('\x1b[32m', 'MongoDB :: connection opened');
});
exports.db.on('reconnected', function () {
    console.log('\x1b[33m"', 'MongoDB :: reconnected');
});
exports.db.on('reconnectFailed', function () {
    console.log('\x1b[31m', 'MongoDB :: reconnectFailed');
});
exports.db.on('disconnected', function () {
    console.log('\x1b[31m', 'MongoDB :: disconnected');
});
exports.db.on('fullsetup', function () {
    console.log('\x1b[33m"', 'MongoDB :: reconnecting... %d');
});
