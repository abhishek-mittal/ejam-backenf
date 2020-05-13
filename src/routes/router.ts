import express from "express";

const router = express.Router();


// Users routes

import deployment from "./deployment";

router.use(deployment);


export default router;