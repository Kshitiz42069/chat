import path from "path"
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoutes from "./Routes/auth.route.js";
import messageRoutes from "./Routes/message.route.js";
import userRoutes from "./Routes/user.route.js";
import connectTOMongoDB from "./DB/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";

const __dirname = path.resolve();

dotenv.config();



const corsOptions = {
    credentials: true, // Allows cookies to be sent
};

app.use(cookieParser());
app.use(express.json());
app.use(cors(corsOptions));


app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname,"/frontend/build")))

app.get("*",(req,res) => {
    res.sendFile(path.join(__dirname,"frontend","build","index.html"))
})


const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    connectTOMongoDB();
    console.log(`Server is running on port ${PORT}`);
});
