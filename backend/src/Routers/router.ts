import { Router } from "express";
import { Request,Response } from "express";
import { createTodo } from "../Controllers/todoController";
const router = Router();

router.get('/',(req: Request, res: Response)=>{
    res.send('sfsf')
})

router.post('/addtodo',createTodo);

export default router;