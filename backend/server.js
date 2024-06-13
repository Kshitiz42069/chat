import authRoutes from "./Routes/auth.route.js"
import express from "express"
import dotenv from "dotenv"
import connectTOMongoDB from "./DB/connectToMongoDB.js";
const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

app.get("/",(req,res) => {
    //root route
    res.send("hello world!!");
})

app.use("/api/auth",authRoutes)
app.listen(PORT, ()=> {
    connectTOMongoDB();
    console.log(`server is running on port ${PORT}`)
});