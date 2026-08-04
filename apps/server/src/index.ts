import express, { Express, Request, Response } from 'express';
import dotenv from "dotenv"
import router from './Routes/posts';
import cors from 'cors'

dotenv.config()



const PORT = process.env.PORT
const app: Express = express();

console.log("this is being registered")

app.use(cors())
app.use(express.json())
app.use('/', router)

app.get('/', (_: Request, res: Response) => {
  console.log("root route hit")
  res.send('Express + TypeScript Server');
});

/*app.listen(Number(PORT), '0.0.0.0', () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`)
})*/

const server = app.listen(Number(PORT), '0.0.0.0', () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`)
})

server.on("close", () => {
  console.log("SERVER CLOSED")
})

server.on("error", (err) => {
  console.log("SERVER ERROR", err)
})

console.log("End of index.ts reached")