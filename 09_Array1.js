// Array

const myArr =[0,1,2,3,4,5,6]

const myHeros =["shaktiman","nagraaj"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr2[1]);


// Array Methods

myArr.push(6)
console.log(myArr);

myArr.pop()


myArr.unshift(-1) // start me add

myArr.shift() // start se uda dena

console.log(myArr);

console.log(myArr.includes(-1)); // false


console.log(myArr.indexOf(1)); // gives index

const newArr = myArr.join() // bind + string me convert
console.log(typeof newArr); // string




// slice vs splice

console.log("A",myArr);

const myn1 = myArr.slice(1,3) // last range include ni hoti
console.log(myn1);


const myn2 = myArr.splice(1,3) // last range include
console.log(myn2);


