let makeUser = function(name, age) {
    return {
        name: name,
        age: age
    }
}

makeUser = function(name, age) {
    return{
        name, 
        age
    }
}

console.log(makeUser('doris', 57))

//
function User(name) {
    //this = {}
    this.name = name
    this.greet = () => console.log(`I am ${this.name}`)
    
}

let user1 = User('bob')
user1 = new User('bob')
console.log(user1)

user1.greet()
console.log(Object.keys(user1))

const user2 = new User('sarah')
user2.greet()

//
let str = String(1)
console.log(typeof str)

str = new String(1)
console.log(typeof str)

//
let human = new function() {
    this.name = 'meg'
    this.age = 27
}

console.log(typeof human, human.name)

//
function BigUser() {
    this.name = 'amy'
    return {name: 'beth'}
}

function SmallUser() {
    this.name = 'lorie'
}

console.log(new BigUser().name, new SmallUser().name)

//console.log(BigUser().name, SmallUser().name)

//과제: new 하지X, SmallUser앱이 살도록 위 코드를 수정하라.
console.log(BigUser().name, SmallUser()?.name)

//
const user = new Object()
console.log(user)
user.age = 12

//
const person = Object.create(user)
console.log(person)
console.log(person.age)
console.log(person == user)

person.name = 'mandarin'
console.log(user)

