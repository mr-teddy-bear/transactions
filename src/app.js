import express from 'express';
import initializeDbMongo from './config/mongo.js'
import router from './routes.js';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

initializeDbMongo(() => { })
app.use('/', router)


//Not real endpoint
app.get('*', function(req, res, next) {
    const err = new Error('Page Not Found');
    err.statusCode = 404;
    next(err);
  });

  //all error
  app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })

export default app;