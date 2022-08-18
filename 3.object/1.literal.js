let user = {
    name: 'frances', // entry
    age: 70
}

user = { //object literal..?
    name: { //value로 object type
        first: 'bob',
        last: 'smith'
    },
    'nick name': 'tiger face', //value로 string타입, nick name은 안됨.. ''안에 넣기!
    age: 13, // value로 넘버타입
    interests: ['music', 'movie'], // value로 배열타입
    sing: () => console.log('lala')//value로 function타입
}

console.log(user.name)
console.log(user.name.first)
user.sing()
//user.'nick name' error
//user.nick name error
console.log(user['nick name']) //space문자가 포함된(' '안에) key를 쓰고싶으면 []?
console.log(user['name']['first'])

//값을바꿀수있으면 프라퍼티? property?
user.name.first = 'john'
user['age'] = 50
console.log(user.name.first, user.age)

//[] 썼을때 장점(불편하지만 쓰는이유?)
let key = 'nick name'
console.log(user[key])
key = 'age'
console.log(user[key])

let man = {
    name: 'samuel',
    1: 'one', //숫자1이아닌 string 1임
    2: 'two'
}

//man.1 error
console.log(man['1']) //[] 써야함