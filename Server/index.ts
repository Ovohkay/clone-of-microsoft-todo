import express,{Application, Request, Response} from "express";
import cors from "cors"
import userRouter from "./Routes/UserRouter"
import taskRouter from "./Routes/TaskRouter"

const PORT : number = 2001


require("./Config/db")

const app : Application=  express()

app.use(cors())
app.use(express.json())

app.get("/",(req: Request, res: Response): Response => {
    return res.status(200).json({
        message: " welcome to my todo app"
    })
})

app.use("/api", userRouter)
app.use("/api/task", taskRouter)

app.listen(PORT,( ) =>{
   console.log(`listening tp ${PORT}`)
})