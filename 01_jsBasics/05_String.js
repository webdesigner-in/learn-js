const name = "mohit"
const repoCount = 3
console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);
//we can also declare the string with a new type also.
const anothername = new String('Mohit')
console.log(anothername.length); //To find the length of the string.
console.log(anothername.at(2)); // To find the character of the string at particular index.
const slicedname = anothername.slice(1,3)
// console.log(slicedname)


console.log(anothername.charCodeAt(0))

console.log(anothername.padEnd(2))

console.log(anothername.repeat(2))
console.log(anothername.replace('Mohit' , 'Aman'))