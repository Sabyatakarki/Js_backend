import express, { Application, Request, Response } from 'express';

const app: Application = express();

const PORT: number = 3000;

// Root route
app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript with Express!');
});

// Books API route
app.get('/api/books', (req: Request, res: Response) => {
    const books = [{ id: 'B-1', name: 'android' }];
    return res.status(200).json({ books });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
