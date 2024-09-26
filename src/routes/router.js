const express = require("express")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user")

const router = express.Router()

router.post("/register", async(req,res)=>{
    const {username , password} = req.body;

    try {
        let user = await User.findOne({username});
        if(user)
        
            return res.status(400).json({msg:"user already stored"})

            user = new User({username, password});
            await user.save();

  const token = jwt.sign({ userId:user._id}, process.env.JWT_SECRET , {expiresIn: '2h'});
  res.json({token})


        
        
    } catch (error) {
        console.log("error in user registeration")
    }
});




router.post ('/login', async(req, res)=>{
    const {username, password} = req.body;

    try {
        const user = await User.findOne({username})

        if(!user)
        
            return res.status(400).json({msg: "invalid data"})

            const isMatch =await user.comparePassword(password);
            if(!isMatch)
            {
                return res.status(400).json({msg: "password not match"})
            }

            const token = jwt.sign({ userId:user._id}, process.env.JWT_SECRET , {expiresIn: '2h'});
            res.json({token})
        
        
    } catch (error) {
        res.status(500).json({msg: "unable to login server error"})
        
    }
})
module.exports = router;