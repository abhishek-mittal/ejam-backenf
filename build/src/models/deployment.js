"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var connection_1 = require("@config/connection");
var mongoose_1 = require("mongoose");
var T = mongoose_1.Schema.Types;
var DeploymentSchema = new mongoose_1.Schema({
    url: { type: T.String, trim: true },
    templateName: { type: T.String, trim: true },
    version: { type: T.String, trim: true },
    deployedAt: { type: T.Date }
}, { collection: 'deploymentModel', versionKey: false, timestamps: true });
exports.default = connection_1.db.model('UserModel', DeploymentSchema);
