import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import cors from "cors"
import authRoutes from "./Routes/auth.route.js"
import messageRoutes from "./Routes/message.route.js"
import userRoutes from "./Routes/user.route.js"

import connectTOMongoDB from "./DB/connectToMongoDB.js";
const app = express();
dotenv.config();

// Middleware to handle CORS
app.use(cors({
    origin: 'http://localhost:3000'
}));

const PORT = process.env.PORT || 5000;
app.use(express.json()); 
app.use(cookieParser());
app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);


app.get("/",(req,res) => {
    //root route
    res.send("hello world!!");
})

app.listen(PORT, ()=> {
    connectTOMongoDB();
    console.log(`server is running on port ${PORT}`)
});