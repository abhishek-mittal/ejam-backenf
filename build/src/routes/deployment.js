"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Deployment_1 = require("./../../src/controllers/Deployment");
var router = express_1.Router();
router.get('/deployments', Deployment_1.getDeployments);
router.post('/deployments', Deployment_1.addDeployments);
router.delete('/deployments', Deployment_1.deleteDeployments);
exports.default = router;
