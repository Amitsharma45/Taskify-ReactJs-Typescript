import { Router } from "express";
import { Request,Response } from "express";
import { createTodo } from "../Controllers/todoController";
const router = Router();

router.get('/',(req: Request, res: Response)=>{
    res.send('sfsf')
})
router.get('/task',(req: Request, res: Response)=>{
    res.send('hi i am task ts app')
})
router.post('/addtodo',createTodo);

export default router;