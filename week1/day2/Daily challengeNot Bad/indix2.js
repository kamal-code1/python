console.log("Avec une seule boucle :");
for (let i = 1; i <= 6; i++) {
  console.log("* ".repeat(i).trim());
}

console.log("\nAvec deux boucles imbriquées :");
for (let i = 1; i <= 6; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += "* ";
  }
  console.log(line.trim());
}
