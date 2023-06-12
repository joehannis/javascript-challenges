const addToBatch = (array, number) => {
  if (array >= 5) {
    console.log(array)
  }
  else {
    array.concat(number);
    console.log(array)
  };
};

