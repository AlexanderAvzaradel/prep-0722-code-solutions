var person = {
  firstName: 'Alex',
  lastName: 'Avzaradel',
  hobby: 'Paddleboarding'
};
console.log(person);

var fullName = person.firstName + person.lastName;
console.log("The person's name is", fullName);

person.job = 'Manager';
console.log("The person's job is", person.job);

person.perviousJob = 'Bartender';
console.log('The persons previos job was', person.perviousJob);

console.log(person);
