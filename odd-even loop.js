const loop = () => {
  for (let i = 1 ; i <= 20 ; i++) {
    if (i % 2 === 0) {
      console.log(`${i} even`)
    }
    else {
      console.log(`${i} odd`)
    }

  }
};

module.exports = loop;