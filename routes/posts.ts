import express, {Express} from 'express';
const app: Express = express();
const router = express.Router();
import {getPublicPosts,getPrivatePosts} from "../controllers/posts"
import {checkAuth} from "../middleware/checkAuth"
router.get('/public',getPublicPosts)
router.get('/private',checkAuth,getPrivatePosts)




export default router