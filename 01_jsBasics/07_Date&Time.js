let myDate = new Date()

// console.log(myDate.toString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toJSON())
// console.log(myDate.toISOString())
// console.log(myDate)


let createOneDate = new Date(2024 , 0 , 24);
// console.log(createOneDate.toDateString());


let date = new Date(2014, 2, 2)
let formattedDate = date.toLocaleString(undefined, {
 hour: "2-digit"
});

console.log(formattedDate)