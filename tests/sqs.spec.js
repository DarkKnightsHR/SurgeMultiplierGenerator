const sqs = require('../sqs');
const mocha = require('mocha');

describe('sqs', () => {
  describe('sqs receive eyeballs', () => {
    it('should receive messages without errors', (done) => {
      sqs.getEyeballs();
      done();
    });
  });

  xdescribe('sqs receive bookings', () => {
    it('should receive messages without errors', (done) => {
      sqs.getBookings();
    });
  });

  xdescribe('sqs receive drivers', () => {
    it('should receive messages without errors', (done) => {
      sqs.getDrivers();
    });
  });

  xdescribe('sqs send multipliers', () => {
    it('should send messages without errors', (done) => {
      sqs.sendMultipliers();
    });
  });

});
