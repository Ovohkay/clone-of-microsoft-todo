import {RegisterUser,GetAllUser,GetOneUser, login} from  "../Controller/Conntroller"
import express from "express"

const router = express.Router()


router.route("/getall").get(GetAllUser)
router.route("/getOne/:id").get(GetOneUser)
router.route("/register").post(RegisterUser)
router.route("/login").post(login)

export default router;