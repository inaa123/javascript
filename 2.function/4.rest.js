function add(a, b) {
    return a + b
}

console.log(add(1, 2, 3)) //넘치는 파라미터는 무시!

//
add = function(...args) { //변수앞에 ...쓰면 rest파라미터가 된다... 배열?....임..?
    let tot = 0
    for(let arg of args) tot += arg
    return tot
}
console.log(add(1), add(1, 2, 3)) //rest파라미터 쓰게되면 파라미터 개수의 제약을 벗어남.

//
function printName(firstName, lastName, ...titles) { //rest파라미터는 마지막에 위치해야함
    console.log(firstName, lastName)
    console.log(titles[0], titles[1], titles[2])
    console.log(titles.length)
}

printName('adam', 'smith', 'operator', 'consul')

//
function showName() {
    console.log(arguments.length)
    console.log(arguments[0], arguments[1])
}

showName() //파라미터 정의되지 않아서 undefined
showName('erica', 'terry')

console.log(Math.max(1, 2, 3))

let arr = [1, 2, 3]
console.log(Math.max(arr))
console.log(Math.max(...arr)) //스프레드?

let arr2 = [4, 5, 6]
console.log(...arr, ...arr2)
console.log(Math.max(...arr, ...arr2))
console.log(Math.max(0, ...arr, 7, ...arr2, 8))

arr = [0, ...arr2, 9]
console.log(arr)

