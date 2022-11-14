import express, {Express} from 'express';
import { check } from 'express-validator';
import { signUp,getAllUsers,login} from '../controllers/auth';
const app: Express = express();
const router = express.Router();
router.post(
    "/signup",
    [
        check("email", "Please input a valid email")
            .isEmail(),
        check("password", "Please input a password with a min length of 6")
            .isLength({min: 6})
    ],
   signUp
  );
  
router.get('/all',getAllUsers)
router.post('/login',login)
export default router