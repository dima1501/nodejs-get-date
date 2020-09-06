const date = require("./date");
const getDateTime = date.currentDateTime();

console.log("Today is " + getDateTime.date + ", the current time is " + getDateTime.time);
