import { Job } from "../models/job.model.js";

//admin post a job
export const postJob = async (req, res) => {
    try {
        const { title, description, requirements, location, salary, jobType, experience, position, companyId } = req.body;
        const userId = req.id; //from middleware

        if (!title || !description || !location || !salary || !jobType || !experience || !position || !companyId || !requirements) {
            return res.status(400).json({message: "All fields are required", success: false});
        }
        const job = await Job.create({
            title,
            description,
            requirements: requirements.split(","),
            location,
            salary: Number(salary),
            jobType,
            experienceLevel: experience,
            position,
            company: companyId,
            created_by: userId
        })
        return res.status(201).json({message: "Job created successfully", job, success: true});
    } catch (error) {
        console.log(error);
    }
}
//student
export const getAllJobs = async (req, res) => {
    try {
        const keyword = req.query.keyword || "";
        const query = {
            $or: [
                { title: { $regex: keyword, $options: "i"}},
                { description: { $regex: keyword, $options: "i"}},
            ]
        };
        const jobs = await Job.find(query).populate({
            path:"company"
        }).sort({createdAt: -1});
        if (!jobs) {
            return res.status(404).json({message: "No jobs found", success: false});
        }
        return res.status(200).json({jobs, success: true});
    } catch (error) {
        console.log(error);
    }
}
//student
export const getJobById = async (req, res) => {
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId);
        if (!job) {
            return res.status(404).json({message: "Job not found", success: false});
        }
        return res.status(200).json({job, success: true});
    } catch (error) {
        console.log(error);
    }
}

//job created by admin till now
export const getAdminJobs = async (req, res) => {
    try {
        const adminId = req.id; //from middleware
        const jobs = await Job.find({created_by: adminId});
        if (!jobs) {
            return res.status(404).json({message: "No jobs found", success: false});
        }
        return res.status(200).json({jobs, success: true});
    } catch (error) {
        console.log(error);
    }
}