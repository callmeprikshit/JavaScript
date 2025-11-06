const marvel_Heros =["thor","IronMan","Spiderman"]

const dc =["superman","flash","batman"]

marvel_Heros.push(dc) // Array k andr array
//console.log(marvel_Heros[1]);



const allHeros= marvel_Heros.concat(dc) // same as push
// console.log(allHeros);


 // Spread operator

 const all_new_heros =[...marvel_Heros,...dc]
 console.log(all_new_heros);



//Array k andr array ko handle
 const another_Array =[1,2,3,4,[5,6,7],[8,9]]
const real_another_array = another_Array.flat(Infinity)
console.log(real_another_array);



// diff type of array m convert krna

console.log(Array.isArray("Prikshit")) // boolean return
console.log(Array.from("Prikshit")); // convert to array



