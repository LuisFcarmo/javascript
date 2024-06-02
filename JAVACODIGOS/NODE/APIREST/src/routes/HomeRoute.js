import { Router } from "express";
import homeController from '../controllers/HomeController'

const router = new Router();
//rosta da home
router.get('/', homeController.index)

export default router
