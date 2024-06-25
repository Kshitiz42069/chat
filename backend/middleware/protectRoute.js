import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        console.log("Token received:", token); // Add this line for debugging

        if (!token) {
            return res.status(401).json({ error: "Unauthorized - no token provided" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Decoded token:", decoded); // Add this line for debugging

        if (!decoded) {
            return res.status(401).json({ error: "Unauthorized - invalid token provided" });
        }

        const user = await User.findById(decoded.userId).select("-password");

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        req.user = user;
        next();

    } catch (error) {
        console.log("Error:", error.message); // Add this line for debugging
        res.status(500).json({ error: "Internal error" });
    }
};

export default protectRoute;
