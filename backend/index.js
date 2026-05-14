import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './utils/db.js';
import userRoutes from './routes/user.route.js';
import companyRoutes from './routes/company.route.js';
import jobRoutes from './routes/job.route.js';
import applicationRoutes from './routes/application.route.js';

dotenv.config({});

const app = express();

//middleware
app.use(express.json()); //json parser
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions = {
    origin: (origin, callback) => {
        const allowedOrigins = [
            'http://localhost:5173',
            process.env.FRONTEND_URL,
        ].filter(Boolean);

        if (!origin || allowedOrigins.includes(origin) || origin.endsWith('.vercel.app')) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
}
app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;

// api's
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/company', companyRoutes);
app.use('/api/v1/job', jobRoutes);
app.use('/api/v1/application', applicationRoutes);

app.listen(PORT, ()=> {
    connectDB();
    console.log(`Server is ruuning on port ${PORT}`);
})
