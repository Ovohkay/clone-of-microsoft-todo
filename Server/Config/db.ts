import mongoose from "mongoose";

const URL: string = "mongodb://localhost/todolist";


mongoose.connect(URL);
mongoose.connection
.on("open",()=>{
    console.log("database connected")
})
.once("error",(err) =>{
    console.log('an error occured')
})