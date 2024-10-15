function greeting(name){
    console.log( `Hello there my name is ${name}`)
}

// greeting('naman')

function addTwoNumbers(num1, num2){
    if(typeof num1 == "number" && typeof num2 == "number"){
        console.log(num1 + num2);1
        
    }
    else{
        console.log("Enter valid values");
    }
}

// addTwoNumbers(3,4)


function loggedInMessage(username){
    if(username=='' || username==undefined || username == null){
        return 'Enter username';
    }else{
        return `${username} just loggedIn`;
    }
}

// console.log(loggedInMessage('mohit'))