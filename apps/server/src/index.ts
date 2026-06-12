import express, { Express, Request, Response } from 'express';
import dotenv from "dotenv"
import router from './Routes/posts';

dotenv.config()

const PORT = process.env.PORT
const app: Express = express();

app.use(express.json())
app.use('/', router)

app.get('/', (_: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(Number(PORT), '127.0.0.1', () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`)
})
