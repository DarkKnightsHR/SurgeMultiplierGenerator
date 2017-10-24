const db = require('./index');
const fs = require('fs');

const ensureDblDigit = digit => {
  return digit < 10 ? `0${digit}` : digit.toString();
};

const buildTimeStr = (hours, minutes, seconds) => {
  hours = ensureDblDigit(hours);
  minutes = ensureDblDigit(minutes);
  seconds = ensureDblDigit(seconds);
  return `${hours}:${minutes}:${seconds}`;
};

const initTimes = () => {
  const timeInserts = [];
  // for every zone
  for (let z = 0; z < 10; z++) {
    // for every day
    for (let d = 0; d < 7; d++) {
      // for every hour
      for (let i = 0; i < 24; i++) {
        // for every minute
        for (let j = 0; j < 60; j ++) {
          // for every 30 second block
          for (let k = 0; k < 31; k += 30) {
            // build time string
            let timeStr = buildTimeStr(i, j, k);
            // add value to times table
            timeInserts.push(db.queryAsync('insert into zone_day_time (zone_id, day_id, time_id) values (?, ?, ?)', [z, d, timeStr]));
          }
        }
      }
    }
  }
  Promise.all(timeInserts)
    .then(()=> {
      console.log('insert operations successful!');
    })
    .catch(err => {
      console.error(err);
    });
};
      

const initDays = () => {
  const dayInserts = [];
  for (let i = 0; i < 7; i++) {
    dayInserts.push(db.queryAsync('insert into day (id) values (?)', [i]));
  }
  Promise.all(dayInserts)
    .then(() => {
      console.log('day insert operations successful!');
    })
    .catch(err => {
      console.error('error during day insert: ', err);
    });
};

const initDb = () => {
  initTimes();
};

initDb();
