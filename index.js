import dotenv from 'dotenv'
dotenv.config()
import express from "express"
import cors from 'cors'
import { router } from './routes/paymentRoute.js'
import Razorpay from 'razorpay'
const app = express()

export const instance = new Razorpay({
  key_id:process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

app.use(express.json())

app.use(cors())

app.use('/api',router)

const port = process.env.PORT || 6000

app.listen(port,()=> {
    console.log( `app running on port ${port} successfully`)
})