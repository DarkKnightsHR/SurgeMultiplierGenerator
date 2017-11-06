const AWS = require('aws-sdk');
const path = require('path');

const multipliersUrl = 'https://sqs.us-west-2.amazonaws.com/373986200290/multipliers-to-client';

AWS.config.loadFromPath(path.join(__dirname, './multipliers.json'));

const sqs = new AWS.SQS({apiVersion: '2012-11-05'});

module.exports = (multipliers) => {
  const queueUrl = multipliersUrl;
  const params = {
    DelaySeconds: 10,
    MessageBody: multipliers,
    QueueUrl: queueUrl,
  };

  sqs.sendMessage(params, function(err, data) {
    if (err) {
      console.log('Error', err);
    } else {
      console.log('Success', data.MessageId);
    }
  });
};
