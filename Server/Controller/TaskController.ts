import TaskModel from "../UseModel/TaskModel";
import UserModel from "../UseModel/UseModel";
import {Request,Response} from "express"
import mongoose from "mongoose";



// Function to get the Task 
const getTask  = async (req:Request,res:Response)=>{

    await TaskModel.find();
    res.status(200).json({
        message:"successfully found "
    });
};


const CreateTask = async (req:Request,res:Response):Promise<Response>=>{
 try {
    const getUser =await UserModel.findById(req.params.userID);

    if(getUser){
        const {title,date}=req.body;
        let myData :Date = new Date()

        const creatingTask = await TaskModel.create({
            title,
            date:date ? date:myData,
            remainder:"",
            status:false,
            note:"",
        });

        await getUser?.myDay?.push(
            new mongoose.Types.ObjectId(creatingTask!._id),
        );
        await getUser?.tasks?.push(
            new mongoose.Types.ObjectId(creatingTask!._id)
        )
        getUser.save()

        return res.status(200).json({
            message:"successfully created task",
            data:creatingTask,
        })
    }
    else{
        return res.status(404).json({
            message:".......Can't find User not found",
        
        })
    }

 
 } catch (error) {
    return res.status(404).json({
        message:"an error occured while creating a task "
    })
 }
}

// post Planed Task
const postPlaned = async (req: Request, res: Response): Promise<Response> => {
    try {
      const getUser = await schema.findById(req.params.id);
  
      if (getUser) {
        const { title, date } = req.body;
  
        let currentDate: Date | string = new Date();
        const postPlaned = await TaskSchema.create({
          title,
          date: date ? date : currentDate,
          reminder: "",
          note: "",
          status: false,
        });
  
        await getUser?.planed.push(new mongoose.Types.ObjectId(postPlaned._id));
        getUser.save();
        return res.status(200).json({
          message: "Successfully posted Planed Taks",
          data: postPlaned,
        });
      } else {
        return res.status(404).json({
          message: "User not found",
        });
      }
    } catch (error) {
      return res.status(400).json({
        message: "An error occured in post Planned",
        error: error,
      });
    }
  };
  
  // post Important Task
  const importantTAsk = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const getUser = await schema.findById(req.params.id);
  
      if (getUser) {
        const { title, date } = req.body;
        let currentDate: Date | string = new Date();
        const postImportant = await TaskSchema.create({
          title,
          date: date ? date : currentDate,
          reminder: "",
          note: "",
          status: false,
        });
  
        await getUser?.important.push(
          new mongoose.Types.ObjectId(postImportant._id)
        );
        return res.status(200).json({
          message: "Successfully posted important task",
          data: postImportant,
        });
      } else {
        return res.status(404).json({
          message: "User not found",
        });
      }
    } catch (error) {
      return res.status(400).json({
        message: "An error occured in post important Task",
        error: error,
      });
    }
  };
  
  // here
  // delete My day
  const deleteMyDay = async (req: Request, res: Response): Promise<Response> => {
    try {
      const getUser = await schema.findById(req.params.id);
      const deleteMyDay = await TaskSchema.findByIdAndDelete(req.params.myDayID);
      // getUser?.myDay?.pull(deleteMyDay);
      getUser?.save();
  
      return res.status(201).json({
        message: "Succesfully deleted myDay",
        data: getUser,
      });
    } catch (error) {
      return res.status(400).json({
        message: "An error occured in deletMyDay",
      });
    }
  };
  

export {CreateTask,getTask}