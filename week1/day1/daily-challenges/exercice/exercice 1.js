const people = ["Greg", "Mary", "Devon", "James"];

people.shift();
console.log(people);

people[people.indexOf("James")] = "Jason";
console.log(people);

people.push("YourName");
console.log(people);

console.log(people.indexOf("Mary"));

let peopleCopy = people.slice(1, people.length - 1); 
console.log(peopleCopy);

console.log(people.indexOf("Foo"));

let last = people[people.length - 1];  
console.log(last);

for (let person of people) {
  console.log(person);
}

for (let person of people) {
  console.log(person);
  if (person === "Devon") {
    break;
  }
}
