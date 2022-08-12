const age = 16 

//sayAge() referenceError

function init() {
    let age = 10

    function sayAge() {
        console.log(age)
    }

    let tellAge = function() {
        console.log(age)
    }

    sayAge()
    tellAge()
}
// 6.1. 일반블럭에선 typeerror..?였는데 여기서 function 블럭에선 안생겼다...?

//sayAge() //referenceError
//tellAge() //referenceError