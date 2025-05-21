const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askNumber() {
  rl.question("Enter a number: ", (input) => {
    console.log("Type of input:", typeof input); 
    const number = Number(input); 

    if (isNaN(number)) {
      console.log("Not a valid number. Try again.");
      askNumber();
    } else if (number < 10) {
      console.log("Number is less than 10, try again.");
      askNumber();
    } else {
      console.log("Thank you! Number is:", number);
      rl.close();
    }
  });
}

askNumber();

