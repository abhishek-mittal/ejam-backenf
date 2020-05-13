"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Joi = __importStar(require("joi"));
var DeploymentValidation = /** @class */ (function () {
    function DeploymentValidation() {
    }
    DeploymentValidation.prototype.createDeployments = function (params) {
        var schema = Joi.object().keys({
            url: Joi.string().uri().required(),
            templateName: Joi.string().required(),
            version: Joi.string().required(),
            deployedAt: Joi.date()
        });
        var schemas = Joi.array().items(schema);
        return Joi.validate(params, schemas);
    };
    DeploymentValidation.prototype.deleteDeployments = function (params) {
        var schemas = Joi.array().items(Joi.object().keys({ id: Joi.string().required() }));
        return Joi.validate(params, schemas);
    };
    return DeploymentValidation;
}());
exports.default = new DeploymentValidation();
