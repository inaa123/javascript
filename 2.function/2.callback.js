//funtion의 바디안에서 또다른 function을 콜하는 걸 callback..?
function sayOdd(num) {
    console.log(`${num} is an odd number.`)
}

function sayEven(num) {
    console.log(`${num} is an even number.`)
}
//파라미터로 펑션을 파라미터로 받음 -> 이유: 바디안에서.
function lookNum(fn1, fn2) { 
    const num = parseInt(Math.random() * 10) + 1
    if(num % 2 != 0) fn1(num)
    else fn2(num)
}
lookNum(sayOdd, sayEven)

function sayOdd2(num) {
    console.log(`${num}은 홀수입니다.`)
}

function sayEven2(num) {
    console.log(`${num}은 짝수입니다.`)
}

lookNum(sayOdd2, sayEven2)

//
let chef1 = function(food) {
    return `달콤한 ${food}.\n`
}

let chef2 = function(food) {
    return `매운 ${food}.\n`
}

let waiter = function(food, chef) {
    return chef(food) //chef를 콜해서 세프가만든 음식을 손님에게 return..
}

console.log(waiter('짜장면', chef1),
            waiter('짜장면', chef2,
            waiter('짬뽕', chef2)))
