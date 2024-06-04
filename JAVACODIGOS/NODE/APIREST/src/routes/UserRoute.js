import { Router } from "express";
import UserController from "../controllers/UserController";
import User from "../models/User.Models";

const router = new Router();
router.get('/', UserController.index)
router.get('/:id', UserController.show)
router.post('/store', UserController.store)
router.put('/update/:id', UserController.update)
router.get('/show/:id', UserController.show)
router.delete("/delete/:id", UserController.delete)
export default router