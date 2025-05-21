const people = ["Greg", "Mary", "Devon", "James"];

people.shift();

people[people.indexOf("James")] = "Jason";


people.push("YourName");


console.log(people.indexOf("Mary"));


const peopleCopy = people.slice(1, -1);
console.log(peopleCopy);


console.log(people.indexOf("Foo")); 


const last = people[people.length - 1];
console.log(last);


for (let person of people) {
  console.log(person);
}

for (let person of people) {
  console.log(person);
  if (person === "Devon") break;
}

