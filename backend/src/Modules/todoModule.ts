import mongoose from "mongoose";
interface Todo{
    _id:number;
    task: string;
}

const todoSchema = new mongoose.Schema<Todo>({
    _id:{
        type: Number,
        required : true
    },
    task:{
        type: String,
        required: true
    }
},{timestamps:true} );

const todo=mongoose.model('todots', todoSchema);

export default todo;