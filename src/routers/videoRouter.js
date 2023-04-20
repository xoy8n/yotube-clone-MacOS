import express from 'express';
import { trending, watch, edit } from '../controllers/videoController';

const videoRouter = express.Router();

videoRouter.get('/trending', trending);
videoRouter.get('/watch', watch);
videoRouter.get('/edit', edit);

export default videoRouter;
