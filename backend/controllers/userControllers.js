const login = (req,res)=>{
    console.log("Login");
    res.send("Login")
}

const signup = (req,res) => {
    res.send("Signup")
}

module.exports = {login,signup}