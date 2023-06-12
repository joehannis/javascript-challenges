const fizzbuzz = require("./fizzbuzz")

const fizzbuzzuntil = (number) =>{
  for (let i = 1 ; i <= number ; i++ ) {
    console.log(fizzbuzz(i))
  }
};

module.exports = fizzbuzzuntil;