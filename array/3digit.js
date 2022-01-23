var number;
do {
  number = Math.floor(Math.random() * 999);
} while (number < 100);
console.log("three digit number is :" + number);