let user = {} //property가 없는 user객체 만들기

user.height = 200// property 추가, user객체에 height가 있으면 그거 쓰고 없으면 추가하는 것
user['weight'] = 80

console.log(user.height, user.weight)

delete user.weight  // property삭제 delete
console.log(user.weight) //undifined; user객체엔 weight이란 property가 없다

//property 있는지 조사하는 연산자 : in => boolean타입 리턴
console.log('height' in user)
console.log('weight' in user)

for(let key in user) //객체의 property를 iterating
console.log(user[key])

user.name = 'parker' 
console.log(Object.keys(user))//interating하는 또다른 법, keys의 리턴타입 : 배열
console.log(Object.values(user)) //value값
console.log(Object.entries(user)) //entries : key와 value를 합친 것..?(터미널에서확인o)

//value로 function
user = {
    greet: function() {console.log('hello')} //greet function
}

user = {
    greet: () => console.log('hello')
}

user = {
    greet() {
        console.log('hello')
    }
}

user.greet()

// optional chainning
user = {}
let address = {}
user.address = address //user객체 안에 address객체 들어감.
address.street = 'sejong'
console.log(user.address.street) //chainning
//console.log(user.city.name) //TypeError: Cannot read properties of undefined (reading 'name')
console.log(user.city?.name) //optional channing , undefined

//
let street
//street = user.city.street TypeError
street = user?.city?.street //?앞의 값이 undefined면 undefined.. 사슬이 끊김..
console.log(street)
street = user?.city?.street ?? 'where'  //optional chainning의 기본값 리턴하는 법ㅂ
console.log(street)

//user?.address = 'sejong'

user = null
//user.greet() TypeError: Cannot read properties of null (reading 'greet')
console.log(user?.greet)
user = undefined
//user.greet() TypeError

user = {}
//user.greet() TypeError: user.greet is not a function
console.log(user.greet?.()) 