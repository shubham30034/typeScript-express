import express,{Router} from "express"
import { userController } from "../controller/userController.js"

const router = express.Router()


router.get("/users",userController)



export default router