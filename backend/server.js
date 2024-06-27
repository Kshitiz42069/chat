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
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    exposedHeaders: ["Set-Cookie"]
};


const PORT = process.env.PORT || 5000;
app.use(cookieParser());
app.use(express.json()); 
app.use(cors(corsOptions));

app.use((req, res, next) => {
    console.log('Request received:', req.method, req.url);
    console.log('Cookies:', req.cookies);
    next();
});


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