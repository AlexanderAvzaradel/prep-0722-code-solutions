function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var sum = addTwoNumbers(7, 3);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var time = convertHoursToMinutes(4);
console.log(time);

function getGreeting(name) {
  return 'Hello' + ' ' + name;
}

var greeting = getGreeting('World');
console.log(greeting);

function multiplyAndDivideby5(num1, num2) {
  return (num1 * num2) / 5;
}

var math = multiplyAndDivideby5(10, 5);
console.log(math);

function suntractTwoNumber(num1, num2) {
  return num1 - num2;
}

var subtract = suntractTwoNumber(100, 8);
console.log(subtract);

function getCircleCircumfrance(radius) {
  return (radius * 2) * Math.PI;
}

var circle = getCircleCircumfrance(5);
console.log(circle);

function getFUllName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var name = getFUllName('Alex', 'Avzaradel');
console.log(name);

function cube(number) {
  return (number * number * number);
}

var triple = cube(2);
console.log(triple);
