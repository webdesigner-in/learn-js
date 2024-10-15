const fbuser = {}

fbuser.id = 1234;
fbuser.name = "Aman";
fbuser.isLoggedIn = false;

// console.log(fbuser);


const regularuser = {
    email: "regular@gmail.com",
    fullname: {
        username: {
                firstname:'Mohit',
                lastname:'Sharma'
        }
    }
}


//console.log(regularuser.fullname.username);

const obj1 = {
    1:'a',
    2:'b'
}

const obj2 = {
    3:'c',
    4:'d'
}

// const obj3 = {obj1 , obj2}-> it stores the second object into first one.

// const obj3 = Object.assign({},obj1,obj2)

//usign spread operator
const obj3 = {...obj1 , ...obj2}

console.log(obj3)

// To get the id's from an object we can use object.keys method


console.log(Object.keys(fbuser))

//we can also take values by using Object method called object.values

 console.log(Object.values(fbuser))

 console.log(fbuser.hasOwnProperty('isLoggedIn'))