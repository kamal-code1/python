const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

let societyName = '';
names.forEach(name => {
  societyName += name[0];  
});

console.log(societyName.split('').sort().join(''));
