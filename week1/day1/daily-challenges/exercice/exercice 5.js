const family = {
  father: "John",
  mother: "Jane",
  child1: "Alex",
  child2: "Chris"
};

for (let key in family) {
  console.log(key);
}

for (let key in family) {
  console.log(family[key]);
}
