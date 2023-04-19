import express from 'express';

const PORT = 3800;
const app = express();

// const handleHome = () => console.log('Hello World!');
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};
const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === '/protected') {
    res.send('<h1>not allowed</h1>');
  }
  console.log('you are allowed to be here');
  next();
};
const handleHome = (req, res) => res.send('i love middleware');
const handleProtected = (req, res) => res.end();

app.use(logger);
app.use(privateMiddleware);
app.get('/protected', handleProtected);
app.get('/', handleHome);

const handleListening = () => {
  console.log(`Server listening on http://localhost:${PORT}🚀`);
};
app.listen(PORT, handleListening);
