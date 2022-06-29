const express = require("express")
const config = require("config")
const path = require("path")
const mongoose =require("mongoose")

const app = express()

app.use(express.json({extended: true}))
app.use("/api/auth", require("./routes/auth"))
app.use("/api/orders", require("./routes/orders"))

if (process.env.NODE_ENV === "production"){
    console.log("production")
   app.use("/", express.static(path.join(__dirname, "client", "build")))
    app.get('*',(req, res)=>{
        res.sendFile(path.resolve(__dirname,"client", "build", "index.html"))
    })
}

const PORT = config.get("port") || 5000
async  function start(){
    try{
         await mongoose.connect(config.get("mongoURL"), (e)=>console.log(`mongoDB connected: ${e}`))
        app.listen(PORT, ()=>{console.log(`App started on port ${PORT}`)})
    } catch (e){
        console.log("server error")
        process.exit(1)
    }
}

start()

