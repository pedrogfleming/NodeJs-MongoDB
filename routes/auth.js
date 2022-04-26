const router = require('express').Router();
const User = require("../Models/User");
//REGISTER
router.post("/auth/require",async(req,res)=>{
    const user = await new User({
        username: "john",
        email: "john@gmail.com",
        password: "123456"
    })
    await user.save();
    console.log(user);
    res.send("ok");
});



//Anda
// router.get("/auth",(req,res)=>{
//     res.send("Welcome to auth page");    
// });
module.exports = router;