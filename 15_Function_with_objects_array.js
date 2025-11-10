function calculateCartPrice(...num1){ // rest

return num1
}


console.log(calculateCartPrice(200,300,400));




const user ={
    username:"hitesh",
    price:199
}

function handleObject(anyObject){
    console.log(`User Name is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user)





const myNewArray =[200,300,400]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));