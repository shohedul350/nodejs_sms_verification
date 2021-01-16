import asyncHandler from '../utils/asyncHandler';
import {
  verificationRequestServices,
  verifyCodeServices,
} from '../services/customerServices';
import { NotFound } from '../utils/generalError';

export const verificationRequest = asyncHandler(async (req, res) => {
  const verificationRequestResult = await verificationRequestServices(req.body);
  return res.status(200).json({ verificationRequestResult, msg: 'Request sent successfully' });
});

export const verifyCode = asyncHandler(async (req, res) => {
  const verifyResult = await verifyCodeServices(req.body);
  return res.status(200).json({ verifyResult, msg: 'verify success successfully' });
});
