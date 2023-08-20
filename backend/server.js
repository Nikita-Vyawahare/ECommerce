const app=require('./app')
const dotenv=require("dotenv")
const connectDatabase=require("./config/database")

process.on('uncaughtException',(err)=>{
    console.log(`Error: ${err.message}`)
    console.log(`Shutting down server`)
    process.exit(1)
})
dotenv.config({path:"backend/config/config.env"});
connectDatabase()


const server=app.listen(process.env.PORT,()=>{
    console.log(`Server is working on http://localhost:${process.env.PORT}`)
})
process.on("unhandledRejection",erry=>{
    console.log(`Error: ${err.message}`)
    console.log(`Shutting down server`)
    server.close(()=>{
        process.exit(1)
    })
})
