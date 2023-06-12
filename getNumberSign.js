const getNumberSign = (number) => {
  if (number > 0) {
    console.log('positive')
  }
  else if (number === 0) {
    console.log('zero')
  }
  else {
    console.log('negative')
  }
};

module.exports = getNumberSign
