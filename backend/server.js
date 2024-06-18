import authRoutes from "./Routes/auth.route.js"
import messageRoutes from "./Routes/message.route.js"
import express from "express"
import dotenv from "dotenv"
import connectTOMongoDB from "./DB/connectToMongoDB.js";
import cookieParser from "cookie-parser";
const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;
app.use(express.json()); 
app.use(cookieParser());
app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);


app.get("/",(req,res) => {
    //root route
    res.send("hello world!!");
})

app.listen(PORT, ()=> {
    connectTOMongoDB();
    console.log(`server is running on port ${PORT}`)
});