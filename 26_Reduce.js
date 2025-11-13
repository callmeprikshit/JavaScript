// accumulator ek bar hi initial value leta fir result ko hi dalta result ko accumulator me

const myNums =[1,2,3]

const initialValue=0;

const sum = myNums.reduce((accumulator,currentValue)=>
accumulator+ currentValue,0
)

console.log(sum);