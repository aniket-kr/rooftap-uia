import config from 'config';
import express from 'express';
import baseRouter from '@src/routes/index';
import connectDb from '@src/utils/connect';

const app = express();
connectDb();

app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'pug');

// register all routes
app.use('/', baseRouter);

app.listen(config.get<number>('serverPort'), () => {
  console.log('Server listening!');
});
