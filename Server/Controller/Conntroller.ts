import UseModel from "../UseModel/UseModel";

import { Request, Response } from "express";

const GetAllUser = async (req:Request, res:Response): Promise<Response> =>{
    try {
        const getUser = await UseModel.find();

        return res.status(200).json({
            message: " all data gootten successfully",
            data: getUser
        })
    } catch (error) {
        return res.status(404).json({
            message: "oops ..oscouldn't get all",
            data: error
        })
    }
}

const GetOneUser = async (req:Request, res:Response): Promise<Response> =>{
    try {
        const singleUser = await UseModel.findById(req.params.id).populate([
            {
				path: "myDay",
				options: {
					createdAt: -1,
				},
			},
			{ path: "task" },
        ]) ;
                
        return res.status(200).json({
            message: " one data gootten successfully",
            data: singleUser
        })
    } catch (error) {
        return res.status(404).json({
            message: "oops ..oscouldn't get one",
            data: error
        })
    }
}



const RegisterUser = async(req: Request, res: Response):Promise<Response> => {
    try {
        const {email,name,password}=req.body;
        const user = await UseModel.findOne({email:email})
        if (user) {
            return res.status(404).json({
                message: "this email has already bben used"
            })
        } else {
            const regUser = await UseModel.create({
                name,email,password
            })
            return res.status(200).json({
                message: " successfully registerd",
                data:regUser
            })
        }
    
    } catch (error) {
        return res.status(404).json({
            message: "couldn't register data",
            data: error
        })
    }
}

const login = async (req: Request, res: Response): Promise<Response> =>{
       try{
    const{email} = req.body;
        const user = await UseModel.findOne({email})


        if(!user) {
            return res.status(400).json({
                message: "Could'nt find user "
            })
        }

        return res.status(200).json({
            message: " all data gootten successfully",
            data: user
        })
    } catch (error) {
        return res.status(404).json({
            message: "oops ..oscouldn't get all",
            data: error
        })
    }
}


export {GetAllUser,RegisterUser,GetOneUser, login}