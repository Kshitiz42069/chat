import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoutes from "./Routes/auth.route.js";
import messageRoutes from "./Routes/message.route.js";
import userRoutes from "./Routes/user.route.js";
import connectTOMongoDB from "./DB/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";

dotenv.config();



const corsOptions = {
    origin: true,
    credentials: true, // Allows cookies to be sent
};

app.use(cookieParser());
app.use(express.json());
app.use(cors(corsOptions));

// Middleware to log requests and cookies
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // Replace with your frontend domain
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    console.log('Request received:', req.method, req.url);
    console.log('Cookies:', req.cookies);
    next();
});

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
    res.send("Hello world!!");
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    connectTOMongoDB();
    console.log(`Server is running on port ${PORT}`);
});
