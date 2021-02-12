import mongoose from 'mongoose';
import config from './environment.js';

const { app: { port, mongoUri } } = config;

export default async function initializeDbMongo(callback) {
    try {
        await mongoose.connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })
        console.log(`MongoDB: Connection has been established successfully to port ${port}`)
    } catch (e) {
        console.log('SERVER ERROR', e.message)
        process.exit(1)
    }
}