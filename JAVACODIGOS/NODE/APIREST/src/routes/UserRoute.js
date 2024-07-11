import { Router } from "express";
import UserController from "../controllers/UserController";
import LoginRequired from "../middlewares/LoginRequired";

const router = new Router();
router.get('/', LoginRequired, UserController.index)
router.get('/:id', UserController.show)
router.post('/store', UserController.store)
router.put('/update/:id', UserController.update)
router.get('/show/:id', UserController.show)
router.delete("/delete/:id", UserController.delete)
export default router