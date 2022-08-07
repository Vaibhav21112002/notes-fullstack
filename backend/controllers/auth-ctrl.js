const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = "thisismysecretkey";

module.exports.register = async(req,res)=>{
    const {name, email, password} = req.body;
    const user = await User.findOne({email:email});
    if(!name || !email || !password){
        return res.status(400).json({
            message:"Please enter all fields"
        })
    }
    if(user){
        return res.status(400).json({
            message: "User already exists"
        })
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    try{
        const newUser = new User({
            name,
            email, 
            password:hash
        });
        const user = await newUser.save();
        const data = {
            user_data:{
                id:user._id,
            }
        }
        const token = jwt.sign(data, JWT_SECRET, {expiresIn: '1h'});
        return res.status(201).json({
            message: "User created successfully",
            user,
            token
        })

    }catch(err){
        return res.status(500).json({
            message: "Error creating user",
            error: err
        })
    }
}

module.exports.login = async(req,res)=>{
    const {email, password} = req.body;
    const user = await User.findOne({email:email});
    try{
        if(!email || !password){
            return res.status(400).json({
                message:"Please enter all fields"
            })
        }
        if(!user){
            return res.status(400).json({
                message: "User does not exist"
            })
        }
    
        const passwordCompare = await bcrypt.compare(password, user.password);
        if(!passwordCompare){
            return res.status(400).json({
                message: "Incorrect password"
            })
        }
    
        const data = {
            user_data:{
                id:user._id,
            }
        }
        const token = jwt.sign(data, JWT_SECRET, {expiresIn: '1h'});
        return res.status(200).json({
            message: "User logged in successfully",
            user,
            token
        })
    }catch(err){    
        return res.status(500).json({
            message: "Error logging in",
            error: err
        })
    }
}

module.exports.getUser = async(req,res)=>{
    const userId =req.user.id;
    try {
        const user = await User.findById(userId).select('-password');
        return res.status(200).json({
            message: "User fetched successfully",
            user
        })
    } catch (error) {
        return res.status(500).json({
            message: "Error logging in",
            error: error
        })
    }
}