let date1 = new Date(2025, 5, 5)
let date2 = new Date(2025, 5, 4)

console.log(date1 - date2) //86400000 -> 단위:ms (하루), 숫자 - 숫자여서 숫자값이 나옴. ㅇㅇ가 기본타입으로 바뀜

let user = {
    name: 'amanda',
    age: 20,
    [Symbol.toPrimitive](hint) {  //symbol타입 key는 [] 안에 써야함 / hint의 타입은 없음(변수는 데이터타입없다)
        return hint == 'string' ? this.name : this.age
    }
}

let user2 = {
    age: 38,
    [Symbol.toPrimitive]() {
        return this.age
    }
}

//객체가 기본타입으로 바뀜?
console.log(`${user}`) //string타입 나타내는 : '' "" `` 3가지
console.log(user > user2)
console.log(user + 50)
console.log(user2 + 50)

//
user = {
    name: 'neo',
    age: 11,
    toString() {
        return this.name
    }
}

console.log(user + '')

user.valueOf = function() { // toString과 valueOf 는 서로서로 도와주는 관계..?
    return this.age
} 
console.log(user + 100)

//
userStr = JSON.stringify(user)
console.log(userStr) //jason에선 key를 " "로 써야함...? 자바스크립트에선안써도됐는데...
console.log(typeof userStr)