import express from 'express';
import { companyRegister, getCompany, getCompanyById, updateCompany } from '../controllers/company.controller.js';
import isAuthenticated from '../middlewares/isAuthenticated.js';

const router = express.Router();

router.route('/register').post(isAuthenticated, companyRegister);
router.route('/get').post(isAuthenticated, getCompany);
router.route('/get/:id').get(isAuthenticated, getCompanyById);
router.route('/update/:id').post(isAuthenticated, updateCompany);

export default router;