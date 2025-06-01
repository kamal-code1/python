// 🌟 Exercise 3 : Repeat the question
let number;

do {
  number = prompt("Enter a number greater than 10:");
} while (Number(number) < 10);
let number;

do {
  number = prompt("Enter a number greater than 10:");
  if (isNaN(Number(number))) {
    alert("Invalid input. Please enter a number.");
  }
} while (Number(number) <= 10);