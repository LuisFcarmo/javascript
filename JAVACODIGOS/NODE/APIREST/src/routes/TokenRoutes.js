import { Router } from "express";
import TokenController from '../controllers/TokenController'

const router = new Router();
//rosta da home
router.post('/', TokenController.store)

export default router
