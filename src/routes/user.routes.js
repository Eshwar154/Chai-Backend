import {Router} from "express"
import {registeUser} from "../controllers/user.controller.js"


const router = Router()


router.route("/regsiter").post(registerUser)

export default router