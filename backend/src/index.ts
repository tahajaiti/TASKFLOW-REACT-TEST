import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { mongoDB } from './config/mongoDB';
import router from './routes/taskRoutes';

dotenv.config(); //env config

const app = express();
app.use(express.json());

app.use(cors({ //using cors
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ['Content-Type', 'Authorization']
}));



mongoDB();

app.use('/tasks', router);

app.get('/', (req, res) => {
    res.send('hello world');
});


const PORT = process.env.PORT || 6969;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});