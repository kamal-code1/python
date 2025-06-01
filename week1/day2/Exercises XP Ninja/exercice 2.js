function calculateAverage(gradesList) {
  const sum = gradesList.reduce((acc, grade) => acc + grade, 0);
  return sum / gradesList.length;
}

function findAvg(gradesList) {
  const average = calculateAverage(gradesList);
  console.log(`Average grade: ${average.toFixed(2)}`);

  if (average >= 65) {
    console.log("You passed!");
  } else {
    console.log("You failed and must repeat the course.");
  }
}


const grades1 = [70, 80, 90];
const grades2 = [50, 60, 55];

findAvg(grades1);  
findAvg(grades2);  
