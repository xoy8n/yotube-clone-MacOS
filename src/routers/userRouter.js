import express from 'express';
import { edit, remove, logout, see } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.get('/logout', logout);
userRouter.get('/edit', edit);
userRouter.get('/remove', remove);
userRouter.get('/:id(\\d+)', see);

export default userRouter;
