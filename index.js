import dotenv from 'dotenv';
import app from './src/app.js';
import config from './src/config/environment.js';

//dotenv.config();
const { app: { port } } = config;
//const port = process.env.APP_PORT



app.listen(port, () => {
    console.log(`Server has been started on port ${port}...`)
})