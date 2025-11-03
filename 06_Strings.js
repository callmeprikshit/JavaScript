// Strings
const name ="prikshit"
const repoCount =50

// console.log(name + repoCount);

// String interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String("prikshitshm")

console.log(gameName[0]);

console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.charAt(1));

console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);



// trim and replce

const newStringOne = "     hitesh       "
console.log(newStringOne.trim()); // delete starting and ending space

 const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20','-'))

console.log(url.includes('hitesh')); // true


const convert2Array ="bawa-sharma-hp-39"
console.log(convert2Array.split('-'));