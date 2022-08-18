let animal = {
    isAlive: true
}

function Rabbit(name) {
    this.name = name
}

console.log(Rabbit.prototype) //prototype?감춰져있고?? 별명이다?? 뭐가??

let rabbit = new Rabbit('black')
console.log(rabbit.isAlive)

//
Rabbit.prototype = animal
console.log(Rabbit.prototype)

rabbit = new Rabbit('white') //rabbit에서 isAlive를 찾는다 - 없다 - 부모 prototype? animal에 있다.
console.log(rabbit.isAlive)

//
function Duck(name) {
    this.name =name
}

console.log(Duck.prototype) //f는 function Duck
console.log(Duck.prototype.constructor)
console.log(Duck.prototype.constructor == Duck)

let duck = new Duck('duck')
console.log(duck.__proto__)  // getter, Duck.prototype의 값과 같음
console.log(duck.__proto__.constructor) //

let duck2 = new Duck('duck2')
console.log(duck2.__proto__ == duck.__proto__) //생성자의 prototype주소값은 동일하게 받음..

let duck3 = new duck.__proto__.constructor('duck') //duck객체의 prototype의 객체의 생성자..?
duck3 = new duck.constructor('duck') // 없으면 부모 prototype객체로가 거기있는 constructor로 new 생성자만듦.
