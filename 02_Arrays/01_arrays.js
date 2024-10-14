let myArr = [0,1,2,3,4,5,6]


let myArr2 = new Array(1,2,3,4)

//Some Array Methods

// myArr.push(10)
// myArr.pop()
// myArr.fill(45)
// myArr.reverse()
// console.log(myArr)



//slice & splice

console.log("A" , myArr)

let arrn1 = myArr.slice(0,3) //slice donot change the main array it forms a different instance
// console.log(arrn1)
// console.log("B" , myArr)

let arrn2 = myArr.splice(0,3) // splice modify the main array and remove the part from the main array that is spliced.
console.log(arrn2);

console.log("C" , myArr)