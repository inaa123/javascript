function add(a, b) {
    return a + b
}

console.log(add(1, 2, 3))

//
add = function(...args) {
    let tot = 0
    for(let arg of args) tot += arg
    return tot
}
console.log(add(1), add(1, 2, 3))

//
function printName(firstName, lastName, ...titles) {
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
showName()
showName('errica', 'terry')

console.log(Math.max(1, 2, 3))

let arr = [1, 2, 3]
console.log(Math.max(arr))
console.log(Math.max(...arr))

let arr2 = [4, 5, 6]
console.log(...arr, ...arr2)
console.log(Math.max(...arr, ...arr2))
console.log(Math.max(0, ...arr, 7, ...arr2, 8))

arr = [0, ...arr2, 9]
console.log(arr)