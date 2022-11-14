import express, { Express, Request, Response } from 'express';
import auth from "./routes/auth"
import posts from "./routes/posts"
const app: Express = express();
app.use(express.json())
app.use('/auth',auth)
app.use('/posts',posts)

app.get('/', (req: Request, res: Response) => {
    res.send('Server Up and Running');
  });
app.listen(5000, () => {
    console.log(`server is running at https://localhost:5000`);
});