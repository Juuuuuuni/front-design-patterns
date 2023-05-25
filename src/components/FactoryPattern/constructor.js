function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

const person3 = new Person("emily", 18, "W");
const person4 = new Person("tom", 22, "M");

console.log(person3); // {name: 'emily', age: 18, gender: 'W'}
console.log(person4); // {name: 'tom', age: 22, gender: 'M'}
