import { Router } from 'express';
import { addDeployments, getDeployments, deleteDeployments } from "./../../src/controllers/Deployment" 
const router: Router = Router();

router.get('/deployments', getDeployments);
router.post('/deployments', addDeployments);
router.delete('/deployments', deleteDeployments);

export default router;