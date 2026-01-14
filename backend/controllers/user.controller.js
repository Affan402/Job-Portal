import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    try {
        const { fullname, email, phoneNumber, password, role } = req.body;
        if (!fullname || !email || !phoneNumber || !password || !role) {
            return res.status(400).json({message: "All field are required", success: false});
        }
        const userExists = await User.findOne({email});
        if (userExists) {
            return res.status(409).json({message: "User already exists", success: false});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({
            fullname, 
            email, 
            phoneNumber, 
            password: hashedPassword, 
            role    
        })
        res.status(201).json({message: "User registered successfully", success: true});
    } catch (error) {
        console.log(error);
    }
}

export const login = async (req, res) => {
    try {
        const { email, password, role } = req.body;
        if (!email || !password || !role) {
            return res.status(400).json({message: "All field are required", success: false});
        }
        let user = await User.findOne({email});
        if (!user) {
            return res.status(404).json({message: "Incorrect email or password", success: false});
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(404).json({message: "Incorrect email or password", success: false});
        }
        //check role match
        if (role != user.role) {
            return res.status(403).json({message: "Unauthorized access", success: false});
        }
        const tokenData = {
            userId: user._id
        }
        const token = await jwt.sign(tokenData, process.env.JWT_SECRET, {expiresIn: '1d'});

        user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role
        }
        return res.status(200).cookie("token", token, {httpOnly: true, maxAge: 24*60*60*1000}).json({message: `Welcome back ${user.fullname}`,user, success: true});
    } catch (error) {
        console.log(error);
    }
}

export const logout = async (req, res) => {
    try {
        res.status(200).cookie("token", "", {maxAge: 0}).json({message: "Logged out successfully", success: true});
    } catch (error) {
        console.log(error);
    }
}

export const updateProfile = async (req, res) => {
    try {
        const { fullname, email, phoneNumber, bio, skills } = req.body;
        const file = req.file;
        //cloudnary will be added here...

        let skillsArray;
        if(skills){
            skillsArray = skills.split(",");
        }
        const userId = req.id; //middleware authentication
        if (!userId) {
            return res.status(401).json({message: "Unauthorized access", success: false});
        }
        
        let user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({message: "User not found", success: false});
        }

        if (fullname) user.fullname = fullname;
        if (email) user.email = email;
        if (phoneNumber) user.phoneNumber = phoneNumber;
        if (bio) user.profile.bio = bio;
        if (skills) user.profile.skills = skillsArray;
        
        await user.save();

        //resume will be added here...

        user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role
        }
        return res.status(200).json({message: "Profile update successfully", user, success: true});
    } catch (error) {
        console.log(error);
    }
}