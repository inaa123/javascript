let id = Symbol()
let id1 = Symbol('id') 
let id2 = Symbol('id')

console.log(id, id1, id2)

console.log(id1 == id2) //심볼타입의 값은 유일..?

console.log(id.toString())
console.log(typeof id)

console.log(id1.description, id2.description, id.description) //파라미터로 있는 게 디스크립션

//Symbol 타입 쓰는 방법
let user = { //user객체만들기
    name: 'neo'
}

let userId = Symbol('userId')
user.userId = 1 //userId라는 property 추가, (string 타입)
user[userId] = 2 // (Symbol타입)

console.log(user) //

//과제: user 객체를 iterating해서, key들을 출력해라.
for(let key in user) console.log(key) //symbol타입 빼고 출력됨.

console.log(Object.keys(user))

//
id1 = Symbol.for('id')
id2 = Symbol.for('id')
console.log(id1 == id2)

let key = Symbol.keyFor(id1)
console.log(key, typeof key)

//
id1 = Symbol.for('name') //global Symbol, for을 이용하면
id2 = Symbol('name') //local Symbol , Symbol에 function이용하면 
console.log(id1 == id2)

console.log(Symbol.keyFor(id1), Symbol.keyFor(id2))