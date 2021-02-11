import app from './app.js';
import config from './config/environment.js';


const { app: { port } } = config;


app.listen(port, () => {
    console.log(`Server has been started on port ${port}...`)
})