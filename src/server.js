import express, { Router } from 'express';
import morgan from 'morgan';
import globalRouter from './routers/globalRouter';
import userRouter from './routers/userRouter';
import videoRouter from './routers/videoRouter';

const PORT = 3800;

const app = express();

const logger = morgan('dev');
app.use(logger);

app.use('/', globalRouter);
app.use('/videos', videoRouter);
app.use('/users', userRouter);

const handleListening = () => {
  console.log(`Server listening on http://localhost:${PORT}🚀`);
};
app.listen(PORT, handleListening);
