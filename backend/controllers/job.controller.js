import { Job } from "../models/job.model";

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
            requirements: requirements.split(','),
            location,
            salary: Number(salary),
            jobType,
            experienceLevel: experience,
            position,
            company: companyId,
            userId: userId
        })
        return res.status(201).json({message: "Job created successfully", job, success: true});
    } catch (error) {
        console.log(error);
    }
}

export const getAllJobs = async (req, res) => {
    try {
        const keyword = req.query.keyword || "";
        const query = {
            $or: [
                { title: { $regex: keyword, $options: "i"}},
                { description: { $regex: keyword, $options: "i"}},
            ]
        };
        const jobs = await Job.find(query);
        if (!jobs) {
            return res.status(404).json({message: "No jobs found", success: false});
        }
        return res.status(200).json({jobs, success: true});
    } catch (error) {
        console.log(error);
    }
}