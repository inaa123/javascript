let makeUser = function(name, age) { //name,age는 파라미터
    return { //객체 리턴
        name: name, //앞의 name,age는 키, 뒤엔 value
        age: age
    }
}//과거 버전

makeUser = function(name, age) {
    return {
        name, //name,age가 key이자 value
        age
    }
} //신 버전, 중복코드 제거

console.log(makeUser('doris', 57))

//주제: 생성자, 대문자-관례
function User(name) {
   //this = {} -> 자동으로 this객체가 생성됨, 직접 쓰면 error 
   this.name = name // this - 생성자에서만 쓸 수 있는 function, 일반function에선 못씀
   this.greet = () => console.log(`I am ${this.name}.`)
   return this // 생략가능.(얘도 자동인듯?) 그러나 직접써도 error 아님
}

let user1 = User('bob') //undefined
user1 = new User('bob') //User {name: 'bob', greet: ƒ}, new 이용해서 function call해야 생성자.
console.log(user1)

user1.greet()
console.log(Object.keys(user1))

const user2 = new User('sarah')
user2.greet() //생성자를 쓰는 이유....

//
let str = String(1) //생성자긴함(new를 안썼을 뿐..?)
console.log(typeof str)  // string 타입을 얻음

str = new String(1)
console.log(typeof str) // object 타입을 얻음

// 
let human = new function() {
    //this = {} // 어떠한 entry도 없는 깨끗한 상태.property를 넣을 수 있음
    this.name = 'meg'
    this.age = 27
}

console.log(typeof human, human.name)

//
function BigUser() {
    this.name = 'amy'
    return {name: 'beth'} //this가 아닌 beth가 담긴 또다른 객체를 리턴, this는 쓰레기가 됨
}

function SmallUser() {
    this.name = 'lorie'
}

console.log(new BigUser().name, new SmallUser().name)

//console.log(BigUser().name, SmallUser().name) //BigUser - 리턴되는 객체가 동일하기때문에 new쓰나 안쓰나 똑같음.
                                              //SmallUser - TypeError: Cannot read properties of undefined (reading 'name'), 리턴되는 객체가 없기 때문에 
//과제: new를 하지 않고, SmallUser앱이 살도록 위 코드를 수정하라.
console.log(BigUser().name, SmallUser()?.name) //앱종료되지 않고 undefined출력되게 optional chainning

//
const user = new Object() //깨끗한 객체 만들기
console.log(user) //user객체에 entry추가할 수 있음~
user.age = 12//user객체에 entry추가할 수 있음~

//
const person = Object.create(user) // 복제
console.log(person)
console.log(person.age)
console.log(person == user) // 복제라 해도 서로 다른 객체임.

person.name = 'mandarin'
console.log(user) //person에 name을 넣은거지 user에 넣은게 아님, 그래서 user객체는 age만 가지고 ㅣㅇㅆ다..



