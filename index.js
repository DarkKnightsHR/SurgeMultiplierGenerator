const express = require('express');
const app = express();
const port = 8080;
const db = require('./db');
const sqs = require('./sqs');

setInterval(sqs.getEyeballs, 10000);
setInterval(sqs.getDrivers, 10000);
setInterval(sqs.getBookings, 10000);
setInterval(sqs.sendMultipliers, 10000);

app.listen(port, () => console.log(`listening on ${port}`));
