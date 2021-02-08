import app from './app';
import config from './config/environment';


const { app: { port } } = config;


app.listen(process.env.PORT || port, () => {
    console.log(`Server has been started on port ${PORT}...`)
})