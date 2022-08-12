//sayHi() --error 
let name = 'neo'
sayHi() //name밑에 있으면 OK -> 이유는 몰라!

function sayHi() { //function declaration ; function 선언.
    console.log('Hi,', name)
}

//
//sayHello() //ReferenceError: Cannot access 'sayHello' before initialization

const sayHello = function() { //function expression ; function값을 sayHello에 할당함.(값을표현하는게 익스프레션)
    console.log('Hello,', name)
}

sayHello() //expression 후에 하면 잘됨