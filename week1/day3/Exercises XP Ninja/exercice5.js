function getUnique(arr) {
  let unique = [];
  for (let i of arr) {
    if (!unique.includes(i)) {
      unique.push(i);
    }
  }
  return unique;
}

console.log(getUnique([1,2,3,3,3,3,4,5])); 
