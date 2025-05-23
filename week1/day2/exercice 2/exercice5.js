const family = {
  father: "John",
  mother: "Jane",
  son: "Jake"
};

for (let key in family) {
  console.log(key);
}

for (let key in family) {
  console.log(family[key]);
}
