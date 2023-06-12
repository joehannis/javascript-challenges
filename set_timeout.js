const printHello = () => {
  console.log('Hello Joe')
};

const executeAfterDelay = (task, number) => {
  setTimeout(task, (number*1000))
};

executeAfterDelay(printHello, 5);
