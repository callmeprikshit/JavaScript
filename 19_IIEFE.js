// immediaetly involked function expression


// global scope me varaiabeles



(function chai(){
    console.log(`DB CONNECTED`);
}
)();
// function + execution call


// GLOBAL SCOPE KE POLLUATION SE KAFI PROBLEM HOTI HAI SO GLOBAL SCOPE KE VARAIBALES OR JO DECLARABLES HAI UNKO HTANE KE LIYE IIEFE USE KRA HAI



// unnamed iife
((name)=>{
    console.log(`DB CONNECTED two ${name}`);
})('Prikshit');


//named iife

(function chai(chaiName){
console.log(`I am Drinking ${this.chaiName}`);
})('Mocha')