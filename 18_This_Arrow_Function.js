const user ={
    username:"Hitesh",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
    }
    // this -> current context
}



user.welcomeMessage()
user.username="Sam"
user.welcomeMessage()


console.log(this); // {}

// in browser its window


// const chai = () => {
//     let username="bawa"
//     console.log(this.username); // undefined
// }


const chai = () => {
    let username="bawa"
    console.log(this); // undefined
}

chai()



// explict return => use return keyword
const addTwo = (num1, num2)=>{
    return num1 + num2
}


console.log(addTwo(3,4))



// implicit return => no return keyword
const addOne = (num1,num2) => num1 + num2 + 1

console.log(addOne(1,2));



const myArray =[1,2,3,4]

myArray.forEach(()=>{
    
})


