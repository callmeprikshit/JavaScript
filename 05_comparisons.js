// Comparisons

console.log(2>1);
console.log(2<1);
console.log(2>=1);
console.log(2<=1);


console.log("2">1); // true


// compare krte hue datatype ko compare kro
console.log("02">1); // true


console.log(null > 0); // false
console.log(null == 0);// false
console.log(null>=0); // true


const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); // false

const bigInt = 89796586n

console.log(typeof bigInt);


const heros =["shaktiman","naagraj","doga"]

let myObj= {
    name:"hitesh",
    age:22,
}

// function with variable

const myFunction = function(){
    console.log("Hello World!");
}
myFunction()

console.log(typeof bigInt);



let myYouTubeName="Prikshit"

let anotherName = myYouTubeName
anotherName="chaiaurcode"
console.log(myYouTubeName);
console.log(anotherName);



let userOne = {
    email:"bawa@gmail.com",
    upi:"bawa@ysl"
}


let userTwo = userOne

userTwo.email="hitesh@google.com"
console.log(userTwo);