let age = [20, 5, 12, 43, 98, 55];

let sum = 0;
let max = age[0]; 

for (let i = 0; i < age.length; i++) {
  sum += age[i];

  if (age[i] > max) {
    max = age[i];
  }
}

console.log("Sum:", sum);
console.log("Highest age:", max);
