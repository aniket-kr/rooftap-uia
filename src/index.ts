import config from 'config';
import express from 'express';
import baseRouter from '@src/routes/index';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'pug');

// register all routes
app.use('/', baseRouter);

app.listen(config.get<number>('serverPort'), () => {
  console.log('Server listening!');
});
