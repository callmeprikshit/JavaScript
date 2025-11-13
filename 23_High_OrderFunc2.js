const myObject ={
    js:"Javascript",
    cpp:"C++",
    rb:"Ruby",
    swift:"Swift by apple"
}


// FOR IN LOOP

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}



// for in -> keys hi aate


const programming = ["js","py","java","cpp"]

for (const key in programming) {
    console.log(programming[key]);
}



// map aint iterable from for in


