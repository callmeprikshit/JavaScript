const coding =["JS","Ruby","Java","Python","CPP"]


coding.forEach((item)=>{
console.log(item);
})


function printMe(item){
    console.log(item);
}

coding.forEach(printMe)



coding.forEach((item,index,arr)=>{

})





const myCoding = [
    {
        languageName:"JavaScript",
        languageFile:"JS"
    },
    {
         languageName:"Java",
        languageFile:"java"
    },
    {
         languageName:"Python",
        languageFile:"py"
    }
]


myCoding.forEach((item)=>{
console.log(item.languageFile,item.languageName);
})

