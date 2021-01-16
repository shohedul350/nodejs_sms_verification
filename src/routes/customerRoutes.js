import express from 'express';
import {
  verificationRequest,
  verifyCode,
} from '../controllers/customerController';

const router = express.Router();

router.route('/verification-request').post(verificationRequest);
router.route('/verify-code').post(verifyCode);

const configure = (app) => {
  app.use('/api/customer', router);
};

export default configure;
