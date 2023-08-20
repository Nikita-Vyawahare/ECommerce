const express=require("express")

const app=express()
const cookieParser=require('cookie-parser')
const errorHandler=require('./middleware/error')
app.use(express.json())
app.use(cookieParser())

const product=require('./routes/productRoute')
const user=require('./routes/userRoute')
const order=require('./routes/orderRoute')

app.use("/api/v1",product)
app.use("/api/v1",user)
app.use("/api/v1",order)

app.use(errorHandler)
module.exports=app