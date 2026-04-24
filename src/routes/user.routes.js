import {Router} from "express"
import {registeUser} from "../controllers/user.controller.js"
import {upload} from "../middlewares/multer.middleware.js"

const router = Router()


router.route("/regsiter").post(
    upload.fields([
        {
                    name:"avatar",
                    maxCount:1
        },
        {
               name:"coverImage",
               maxCount:1
        }   
    ]),
    registerUser)

export default router