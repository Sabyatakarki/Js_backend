import express, { Application, Request, Response } from 'express';


import { connectDB } from './database/mongodb';
import bodyParser from 'body-parser';

import dotenv from 'dotenv';
dotenv.config();
console.log(process.env.PORT);

// import bookRoutes from './routes/book.route';
import authRoutes from './routes/auth.route';


const app: Application = express();
const PORT: number = 5050;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript with Express!');
});
app.use('/api/auth', authRoutes);
// app.use('/api/books', bookRoutes);

app.get('api/books', (req: Request, res: Response) => {
    const booka = [{id: 'B-1',name:'andriod'}]
    return res.status(200).json({books:booka})
});
// app.use('/api/books', bookRoutes);
async function startServer() {
    await connectDB();
    app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});  
}
startServer();