// For Loop

for (let index = 0; index < 10; index++) {
    const element = index;
    if(index == 5){
        console.log("5 is best number");
    }
    console.log(index);
}


for (let index = 0; index <= 10; index++) {
    console.log(`Outer Loop ${index}`);
for (let index1 = 0; index1 <= 10; index1++) {
    console.log(`Inner Loop Value ${index1} `);
    
}
    
}


let myArray =["flash","batman","superman","superman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}



// Break and continue
// control flow ko break krna ho tho => break
// ek iteration skip ho jata => continue

for(let index =1;index<=20;index++){
    if(index==5){
        console.log(`Detected 5`);
        continue
    }
    console.log(`Value of i is ${index}`);
}