let animal = {
    name: 'animal'
}

animal = new Object()
animal.name = 'animal'

//과제 : 토끼를 object literal 및 생성자로 만들어라.
//       토끼는 age = 3 property를 갖고 있다.
let rabbit = {
    age: 3
}

rabbit = new Object()
rabbit.age = 3

console.log(animal.__proto__)
console.log(rabbit.__proto__)

console.log(animal.name, rabbit.age)

rabbit.__proto__ = animal //상속관계, A is a B (rabbit is an animal)
console.log(rabbit.__proto__)
console.log(rabbit.name, rabbit.age)

//
animal = {
    walk() {
        console.log('animal walk.')
    }
}

rabbit = {
    __proto__: animal //rabbit is an animal
}

rabbit.walk()

//
let user = {
    name: 'user'
}

let administrator = { //administrator is a user를 표현! 
    __proto__: user
}

console.log(administrator.name) // user

administrator.name = 'jonadan'
console.log(administrator.name) // jonadan

//
animal = {
    name: 'animal',
    weight: 50,
    eat() {
        console.log(`${this.name} eat.`)
    }
}

rabbit = {
    name: 'rabbit',
    __proto__: animal
}

let lion = {
    name: 'lion',
    __proto__: animal
}

animal.eat() //animal eat.
rabbit.eat() // rabbit eat. rabbit은 ㅇㅇㅇㅇ되지않음..?
lion.eat() // lion eat.

//
console.log(Object.keys(rabbit)) //name하나 가지고 있음...나머지 eat은..프로토타입?에서가져옴..?

//과제: rabbit의 key들을 iterating해서 출력하라.
for(let key in rabbit) 
    console.log(key)
//keys는 내 객체의..만 보여줌.. for(key)사용하면 상속까지 다 보여줌.

for(let key in rabbit) {
    let isOwn = rabbit.hasOwnProperty(key) //key가 자식꺼면 true, 부모꺼면false
    if(isOwn) msg = `child's key: ${key}`
    else msg = `parent's key: ${key}`
    console.log(msg)
}