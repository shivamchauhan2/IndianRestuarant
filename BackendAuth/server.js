const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const app=express()
const port=9000
const url="mongodb+srv://shivamc1:shivam7april@cluster0.n3a909r.mongodb.net/FoodApp?retryWrites=true&w=majority"
const userRouter = require("./routes/users.router.js");

const dishDBRouter = require("./routes/dishesDB.router.js");

const authRouter = require("./routes/auth.router");

app.use(cors())
app.use(express.json())
mongoose.connect(url)
db=mongoose.connection
db.on("connected",()=>{console.log("connected")})
db.on("error",()=>{console.log("error")})

app.get("/",(req,res)=>{res.send("Server started")})
app.use('/getusers' , userRouter);  // localhost:9000/getusers

app.use('/getdishes' , dishDBRouter); //localhost:9000/getdishes

app.use("/api/auth", authRouter);


app.listen(port,()=>{console.log("server is listening on http://localhost:"+port) })

