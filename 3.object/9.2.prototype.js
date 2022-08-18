let obj = {} //new Object을 줄여서 쓴 것.

console.log(obj.__proto__)
console.log(obj.__proto__ == Object.prototype)

//
obj = new Object()
console.log(Object.prototype)
console.log(obj.__proto__)
console.log(Object.prototype.__proto__)

console.log(obj.toString())

//배열만들기(직선...)
let arr1 = [1, 2]
let arr2 = new Array(1, 2)
console.log(arr1.__proto__ == arr2.__proto__)
console.log(arr1.__proto__ == Array.prototype)

console.log(Array.prototype.__proto__) // 부모는?! 위에서 봤던 거! 
console.log(Object.prototype)
console.log(Array.prototype.__proto__ == Object.prototype)
console.log(arr2.toString()) //  [1, 2] -> Array.toString?이 뭐시기된거임. 

//
let one = new Number(1)
console.log(one) // Number (1) 얘도 toString이 있음

//Array생성자와 Number생성자는 toString을 가지고 있어서 User를 만들고 보니. User엔 toString이 없어서 Object toString 썼대...
function User() {} //toString없음
let user = new User()
console.log(user.toString()) // [object Object]
console.log(obj.toString()) // [object Object]
