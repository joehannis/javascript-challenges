const checkLength = (phone_no) => {
  if (phone_no.length <= 10) {
    return true
  }
  else {
    return false
  }
};

const filterLongNumbers = (numbers).filter(checkLength);

const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla', discount: 60 }
];

const generateMessages = (name) => {
  return `Hi ${name}! 50% off our best candies for you today!`
};

const generateMessagesNames = names.map(generateMessages);
