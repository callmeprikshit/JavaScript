// singelton -> constructor
// literal -> no singelton




// Object.create -> constrcutor


// symbol
const mySym = Symbol("key1")

// Object Literal
const JsUser={
name:"Hitesh",
"full name":"Prikshit Sharma",
age:18,
location:"Jaipur",
email:"hitesh@gmail.com",
isLoggedIn:false,
lastLoginDays:["Monday","Friday"],
// symbol
[mySym]:"mykey1"
}

console.log(JsUser["name"]); // behind yeh string hota
console.log(JsUser.name);

console.log(JsUser["full name"]);

console.log(JsUser[mySym]);



JsUser.email="bawa@gmail.com"
// Object.freeze(JsUser)


JsUser.email="bawa1@gmail.com"
console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS USER");
}


JsUser.greeting2 = function(){
    console.log(`Hello JS User, ${this.name}`);
}
console.log(JsUser.greeting2());