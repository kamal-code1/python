const person1 = {
  fullName: "Alice Johnson",
  mass: 68, 
  height: 1.65, 
  calculateBMI: function() {
    return this.mass / (this.height ** 2);
  }
};

const person2 = {
  fullName: "Bob Smith",
  mass: 85,
  height: 1.8,
  calculateBMI: function() {
    return this.mass / (this.height ** 2);
  }
};

function compareBMI(p1, p2) {
  const bmi1 = p1.calculateBMI();
  const bmi2 = p2.calculateBMI();

  if (bmi1 > bmi2) {
    console.log(`${p1.fullName} has a higher BMI (${bmi1.toFixed(2)}) than ${p2.fullName} (${bmi2.toFixed(2)}).`);
  } else if (bmi2 > bmi1) {
    console.log(`${p2.fullName} has a higher BMI (${bmi2.toFixed(2)}) than ${p1.fullName} (${bmi1.toFixed(2)}).`);
  } else {
    console.log(`${p1.fullName} and ${p2.fullName} have the same BMI (${bmi1.toFixed(2)}).`);
  }
}

compareBMI(person1, person2);
