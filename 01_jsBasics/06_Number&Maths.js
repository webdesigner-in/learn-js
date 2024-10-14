// **********Number***********
const score = 400;
// console.log(score)

const balance = new Number(100)
// console.log(balance)

const changeToString = balance.toString()
// console.log(balance.toFixed(2))


const otherNumber = 125.7552;

// console.log(otherNumber.toPrecision(3))

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-In'))
 //To change the value according to indian number system.

// ******Maths*******

const randomNumber = (Math.random()*10) + 1;
const presicisedValue = Math.floor(randomNumber)
// console.log(randomNumber);
// console.log(presicisedValue);


const min =  10;
const max = 20;
console.log(Math.floor(Math.random() * (max-min + 1))+min)