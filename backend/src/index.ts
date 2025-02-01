import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config(); //env config

const app = express();
app.use(express.json());

app.use(cors({ //using cors
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

const PORT = process.env.PORT || 6969;

mongoose.connect(process.env.MONGO_URI!).then(() => {console.log('Connected to MongoDB')})
.catch((err) => {console.log(err)}); //connecting to mongoDB

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});