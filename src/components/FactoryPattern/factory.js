function person(name, age, gender) {
  const person = {};
  person.name = name;
  person.age = age;
  person.gender = gender;

  return person;
}

const person1 = person("emily", 18, "W");
const person2 = person("tom", 22, "M");

console.log(person1); // {name: 'emily', age: 18, gender: 'W'}
console.log(person2); // {name: 'tom', age: 22, gender: 'M'}
