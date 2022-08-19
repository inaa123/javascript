function greet() {
    console.log('hello')
}

greet()

let salute = function() {
    console.log('hi')
}

salute()
console.log(salute)

let sayHello = function(user, greeting) {
    return `${greeting}, ${user}`
}

console.log(sayHello('rebecca', 'hello'))

//과제: HI라고 인사하는 function을 정의하고 실행하라.
let sayHi = function() {
    console.log('HI')
}
const say = sayHi
say()

//

let shout = function() {
    return function() {
        console.log('yoo hoo')
    }
}
let speak = shout()
speak();

//
(function() {
    console.log('earth')
})()

//
let myFn = function(fn) {
    const result = fn()
    console.log(result)
}

myFn(function() {
    return 'moon'
})

let argFn = function() {
    return 'star'
}
myFn(argFn)

let showMsg = function(from, msg) {
    console.log(`${from}: ${msg}`)
}
showMsg('trinity', 'follow rabbit')
showMsg('trinity')