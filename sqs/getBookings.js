const AWS = require('aws-sdk');

const bookingsUrl = '';
AWS.config.loadFromPath('./bookings.json');

const sqs = new AWS.SQS({ apiVersion: '2012-11-05' });

module.exports = () => {
  const queueUrl = bookingsUrl;
  const params = {
    AttributeNames: [
      'SentTimestamp',
    ],
    MaxNumberOfMessages: 10,
    MessageAttributeNames: [
      'All',
    ],
    QueueUrl: queueUrl,
    VisibilityTimeout: 1,
    WaitTimeSeconds: 0,
  };

  sqs.receiveMessage(params, (err, data) => {
    if (err) {
      console.log('Receive Error', err);
    } else {
      const deleteParams = {
        QueueUrl: queueUrl,
        ReceiptHandle: data.Messages[0].ReceiptHandle,
      };
      sqs.deleteMessage(deleteParams, (err, data) => {
        if (err) {
          console.log('Delete Error', err);
        } else {
          console.log('Message Deleted', data);
        }
      });
    }
  });
};
