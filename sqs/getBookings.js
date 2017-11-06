const AWS = require('aws-sdk');

const bookingsUrl = '';
AWS.config.loadFromPath('./bookings.json');

const sqs = new AWS.SQS({apiVersion: '2012-11-05'});

const getBookings = () => {
  const queueUrl = bookingsUrl;
  const params = {
    AttributeNames: [
      'SentTimestamp'
    ],
    MaxNumberOfMessages: 10,
    MessageAttributeNames: [
      'All'
    ],
    QueueUrl: queueUrl,
    VisibilityTimeout: 0,
    WaitTimeSeconds: 0
  };

  sqs.receiveMessage(params, function(err, data) {
    if (err) {
      console.log('Receive Error', err);
    } else {
      var deleteParams = {
        QueueUrl: queueURL,
        ReceiptHandle: data.Messages[0].ReceiptHandle
      };
      sqs.deleteMessage(deleteParams, function(err, data) {
        if (err) {
          console.log('Delete Error', err);
        } else {
          console.log('Message Deleted', data);
        }
      });
    }
  });
};
