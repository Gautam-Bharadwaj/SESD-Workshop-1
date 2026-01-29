import { Schema , Document , model} from "mongoose"

interface T_Interface extends Document{
    title:String;
}

const ToDoSchema = new Schema({title:String})