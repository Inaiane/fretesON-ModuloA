
import {userController} from '../controllers/user.controller.js';
import express from 'express';

const router = express.Router();

router.get('/users', userController.get);
router.get('/users/:userId', userController.getById);
router.post('/users', userController.post);
router.put('/users/:userId', userController.update);
router.delete('/users/:userId', userController.deleteUser);

export default router;