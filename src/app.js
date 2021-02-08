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

export default app;