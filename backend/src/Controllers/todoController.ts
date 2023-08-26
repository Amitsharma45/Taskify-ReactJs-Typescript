import todo from "../Modules/todoModule";
import { Request, Response } from "express";


export const createTodo = (req: Request, res: Response) => {

    const newTodo = new todo({
        _id: req.body._id,
        task: req.body.task,
    });

    newTodo.save()
        .then((data) => {
            res.send({
                status: 200,
                message: "task done succes"
            })
        }).catch((err) => {
            console.log(err);
            res.send({
                message: 'err'
            })
        })
}