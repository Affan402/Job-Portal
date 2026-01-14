
export const companyRegister = async(req, res) =>{
    try {
        const {companyName} = req.body;
        if(!companyName){
            return res.status(400).json({message: "Company name is required", success: false});
        }
    } catch (error) {
        console.log(error);
    }
}