// const tinderUser = new Object()

const tinderUser ={}
tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser ={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstName:"Hitesh",
            lastNmae:"choudhary"
        }
    }
}



console.log(regularUser.fullname.userfullname.firstName);



const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}


// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);


const users =[
    {
       id:1,
       email:"bawa@gmail.com" 
    },
    {

    },
    {

    }
]

users[1].email
console.log(tinderUser);

// getting keys
console.log(Object.keys(tinderUser));

// getting values
console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('name')); // true

