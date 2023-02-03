import mongoose from "mongoose";

import {taskData} from "../AllInterface";

interface userData{
    name: string,
    email: string,
    password: string,
    myDay: any[],
    important: taskData[],
    planned: taskData[],
    assigned: taskData[],
    tasks: any[]
}

interface newTaskData extends userData, mongoose.Document{}

const taskSchema = new mongoose.Schema({
    name: 
        {
            type: String,
            required: true
        },
    
    email: 
        {
            type: String,
            required: true,
        },
    
    password: 
        {
            type: String,
            required: true
        },

    myDay: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            required: true   
        }
    ],
    important: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
        }
    ],
    planned:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
        }
    ],
    assigned: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
        }
    ],
    task: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
        }
    ]
})

const taskModel =  mongoose.model<newTaskData>( "taskCollection", taskSchema );
 export default taskModel;