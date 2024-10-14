const marvalHeros = ["thor" , "ironman" , "spiderman"]

const dcHeros = ["superman", "flash" , "batman"]

// marvalHeros.push(dcHeros)
// const newHeros = marvalHeros.concat(dcHeros)
// console.log(newHeros)


//spread Operator in Arrays
const allHeros = [...marvalHeros, ...dcHeros]
// console.log(allHeros)
// console.log(marvalHeros)



const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const usable_another_array = another_array.flat(Infinity)

// console.log(usable_another_array)



let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));


let arr_name = Array.from("Mohit")
console.log(arr_name)
console.log(Array.isArray(arr_name))