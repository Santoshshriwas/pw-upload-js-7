const person= {
  firstName:"Santosh",
  lastName:"Shriwas",
  age:22,
}

function ageInDays(person) {
  const { firstName, lastName, age } = person;
  const fullName = `${firstName} ${lastName}`;
  const ageInDaysValue = age * 365;
  return function logAgeDetails() {
    console.log(`The person's full name is ${fullName} and their age in days is ${ageInDaysValue}.`);
  };
}