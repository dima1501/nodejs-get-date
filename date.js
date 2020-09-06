function currentDateTime() {
  return {
    date: new Date().toISOString().slice(0, 10),
    time: new Date().toLocaleTimeString(),
  };
}

module.exports = {
  currentDateTime,
};
