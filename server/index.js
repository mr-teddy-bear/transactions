// require("@babel/register")();
// require("@babel/polyfill");
// require("./src/server.js");



import app from './src/app.js';
import config from './src/config/environment.js';

const { app: { port } } = config;




app.listen(port, () => {
    console.log(`Server has been started on port ${port}...`)
})