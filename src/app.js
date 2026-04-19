import express from 'express'
import cors from "cors"
import cookieParser from 'cookie-parser'

const app = express()


app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"16kb"})) // to limit the upcoming json data
app.use(express.urlencoded({extended:true,limit:"16kb"})) // for the data coming in url 
app.use(express.static("public"))//upcoming  files or folder we want to store  & "public" is folder name 
app.use(cookieParser())
export {app}