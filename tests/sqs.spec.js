const sqs = require('../sqs');
const mocha = require('mocha');

describe('sqs', () => {
  describe('sqs get eyeballs', () => {
    it('should get messages without errors', (done) => {
      sqs.getEyeballs();
      done();
    });
  });

  describe('sqs get bookings', () => {
    it('should get messages without errors', (done) => {
      sqs.getBookings();
      done();
    });
  });

  describe('sqs get drivers', () => {
    it('should get messages without errors', (done) => {
      sqs.getDrivers();
      done();
    });
  });

  describe('sqs send multipliers', () => {
    it('should send messages without errors', (done) => {
      const mults = JSON.stringify({ multipliers: [{ zone: 1, multiplier: 1, zone: 2, multiplier: 1.3 }] });
      sqs.sendMultipliers(mults);
      done();
    });
  });
});
