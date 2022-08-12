//function 선언하는 방법 두가지~ //funtion은 데이터이다.
function greet() {
    console.log('hello')
}

greet()

let salute = function() {
    console.log('hi')
}

salute()
console.log(salute)

let sayHello = function(user, greeting) { //변수명은 명사, 변수명에 function담겨있어서 동사
    return `${greeting}, ${user}` // template literal
}

console.log(sayHello('rebecca', 'hello'))

// 과제 : HI라고 인사하는 funtion을 정의하고 실행하라.
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
// 이거 쓸땐 위에 명령문에 세미콜론 찍어야지 구분이 된다.
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