import jwt from 'jsonwebtoken';

export const isAuthenticated = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({message: "Unauthorized access", success: false});
        }
        const decode = await jwt.verify(token, process.env.JWT_SECRET);
        if(!decode) {
            return res.status(401).json({message: "Unauthorized access", success: false});
        }
        req.id = decode.userID;
        next();
    } catch (error) {
        console.log(error);
    }
}

export default isAuthenticated;