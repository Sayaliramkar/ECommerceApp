import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { connect } from 'mongoose'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'

//App config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

//Middlewares
app.use(express.json())
app.use(cors())

//api endpoints
app.get('/',(req,res)=>{
     res.send("Api working")
})

app.listen(port, ()=> console.log('server started on port:'+port))

