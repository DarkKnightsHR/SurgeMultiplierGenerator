const aws = require('aws-sdk');
const eyeballUrl = '';
const driverUrl = '';
const bookingsUrl = '';
const multipliersUrl = '';

aws.config.loadFromPath('./config.json');

const sqs = new aws.SQS();

module.exports = {
  getEyeballs,
  getDrivers,
  getBookings,
  sendMultipliers,
};
