import twlio from 'twilio';

const client = twlio()(process.env.ACCOUNTID, process.env.AUTHTOKEN);

console.log(process.env.ACCOUNTID)
export const verificationRequestServices = async (phoneNumber, channel) => {
  const verificationRequestResult = await client
    .verify
    .services(process.env.SERVICRSID)
    .verifications
    .create({
      to: phoneNumber,
      channel: channel === 'sms' ? 'msg' : 'call',
    });
  return verificationRequestResult;
};

export const verifyCodeServices = async (phoneNumber, phonCode) => {
  const verifyResult = client
    .verify
    .services(process.env.SERVICRSID)
    .verificationChecks
    .create({
      to: phoneNumber,
      code: phonCode,
    });
  return verifyResult;
};
