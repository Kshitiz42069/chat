export const signUp = async(req,res)=>{
    try {
        const {full_name,user_name,password,confirm_password,gender} =req.body
    } catch (error) {
        console.log(error)
    }
}
export const login = (req,res)=>{
    res.send("Login");
    console.log("login user");
}
export const logOut = (req,res)=>{
    res.send("Login");
    console.log("logout user");
}