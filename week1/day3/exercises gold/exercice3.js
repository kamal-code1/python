function swapCase(str) {
  let swapped = '';
  for (let char of str) {
    swapped += char === char.toUpperCase()
      ? char.toLowerCase()
      : char.toUpperCase();
  }
  return swapped;
}


console.log(swapCase("The Quick Brown Fox")); 
