import { Application } from "../models/application.model.js";
import { Job } from "../models/job.model.js";

export const applyJob = async (req, res) => {
    try {
        const userId = req.id; //from middleware
        const {id: jobId} = req.params;
        if (!jobId) {
            return res.status(400).json({message: "Job ID is required", success: false});
        }
        //check if the user has already applied for the job
        const existingApplication = await Application.findOne({job: jobId, applicant: userId});
        if (existingApplication) {
            return res.status(400).json({message: "You have already applied for this job", success: false});
        }

        //check if the job exists
        const job = await Job.findById(jobId);
        if (!job) {
            return res.status(404).json({message: "Job not found", success: false});
        }

        //create a new application
        const newApplication = await Application.create({
            job:jobId,
            applicant:userId,
        })
        job.applications.push(newApplication._id);
        await job.save();
        return res.status(201).json({message: "Applied for the job successfully", success: true});
    } catch (error) {
        console.log(error);
    }
}

export const getAppliedJobs = async (req, res) => {
    try {
        const userId = req.id; //from middleware
        const application = await Application.find({applicant: userId}).sort({createdAt: -1 }).pouplate({
            path: "job",
            options: {sort: {createdAt: -1}},
            populate: {
                path: "company",
                options: {sort: {createdAt: -1}},
            }
        })
        if (!application) {
            return res.status(404).json({message: "No applied jobs found", success: false});
        }
        return res.status(200).json({application, success: true});
    } catch (error) {
        console.log(error);
    }
}

//admin get all applicants for a job
export const getApplicants = async (req, res) => {
    try {
        const {id: jobId} = req.params; //job id
        const job = await Job.findById(jobId).populate({
            path: "applications",
            options: {sort: {createdAt: -1}},
            populate: {
                path: "applicant",
            }
        })
        if (!job) {
            return res.status(404).json({message: "Job not found", success: false});
        }
        return res.status(200).json({job, success: true});
    } catch (error) {
        console.log(error);
    }
}