// serializing : 객체를 string으로..? ,
let user = {
    name: 'kelly',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css'],
    wife: null
}

let json = JSON.stringify(user)
console.log(json) //key는 string타입, value는 any타입(스트링, 넘버, 배열, 불리언..등등)

//
user = {
    name: 'jessie',
    room: {
        number: 23,
        participants: ['john', 'ann']
    },
    greet() {
        return 'hello'
    },
    [Symbol('id')]: 123,
    color: undefined
}

console.log(JSON.stringify(user)) //json에서 undefined, Symbol, ??(하나더..) 무시한다.

//
let room = {
    number: 23
}

let meetup = {
    title: 'conference',
    room
}

console.log(JSON.stringify(meetup))

room.toJSON = function() { return this.number} // toJSON ? 언제쓰라고?
let s = JSON.stringify(meetup)
console.log(s)

// parsing  : 다시 객체로 만들기
let manJson = '{"name": "will", "age": 27, "mager": ["computer", "art"], "friend": {"name": "scott", "age": 27}}'
let man = JSON.parse(manJson) // 객체로 변환

console.log(man)
console.log(typeof man) //object, 

//객체를 시리얼라이징: stringify사용, 파싱: parse사용