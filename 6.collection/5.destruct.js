let arr = ['ilya', 'kantor']
let [name, surname] = arr //배열을ㄴ 아님 , 배열의 형태일 뿐?
console.log(name, surname)

let[one, two] = [1, 2, 3] //변수와 원소의 개수 다른 경우
console.log(one, two)

let[three, four] = [3] // 변수가 원소보다 많은 경우
console.log(three, four);

[one, , three] = [1, 2, 3, 4] //중간에 변수가 빠진 경우
console.log(one, three) 

//
let s = 'i am' //string도 구조분해 할당 가능
let [a, b, c] = s
console.log(a, b, c)

//
i = s.split(' ') // split 문자를 배열로 바꾼다. join: 배열을 문자로바꾼다.
console.log(i);

[a, b] = i
console.log(a, b)

//
let user = {};
[user.name, user.surname] = 'john smith'.split(' ') //구분자로 스페이스
console.log(user)

//
user = {
    name: 'oscar',
    age: 21
}

let entries = Object.entries(user) //entries - > 엔트리가 배열이 됨.
console.log(entries) //entries는 배열이니까 iterating할수있다. 아래

for(let [key, value] of entries) console.log(key, value) //배열로 iterating

//
let map = new Map([ //map생성자에 파라미터로 배열
    ['name', 'edith'], //1번 key 2번 value
    ['age', 30]
])

for(let [key, val] of map) console.log(key, val) //Map으로 iterating

//
let guest = 'jane'
let admin = 'pete';

[guest, admin] = [admin, guest]
console.log(guest, admin);

//
[one, two, ...rest] = [1, 2, 3, 4]//rest 파라미터뿐아니라 배열의 원소로도 
console.log(one, two, rest);

//
[name, surname='annonymous'] = ['john'] //기본값설정가능, surname='~'
console.log(name, surname)

//
let options = {
    title: 'menu',
    width: 100,
    height: 200
}

let {title, height, width} = options //할당연산자 오른쪽 객체둘땐 {}괄호쓰기, 할당연산자 오른쪽객체가 object이니 왼쪽 object형태 
console.log(title, height, width);

({title, height, width} = options)  // ()안쓰면 에러!ㅎ

let {width: w, height: h} = options
console.log(w, h)

let {title:t, ...other} = options // rest
console.log(t, other) //rest의타입이 객체.. 어디는 rest타입이 array..

let {title: subject, wide=1000} = options
console.log(subject, wide)

//
let bread = {
    size: {
        width: 100,
        height: 200
    },
    items: ['cake', 'donut'],
    extar: true
}

//과제: bread에서 size와 items를 뽑아내라.
let {size, items} = bread
console.log(size, items)

//또다른방법, 쪼개서 뽑아내기.. 구조분해...?
let {
    size: {
        width: w2,
        height: h2
    },
    items: [item1, item2]
} = bread
console.log(w2, h2, item1, item2) 

//
let menu = {
    title: 'menu',
    items: ['list', 'add'],
    expired: 10
}

function showMenu({title: name, items: [item1, item2]}) {//menu는 name list는 item1, add는 item2에
    console.log(name, item1, item2)
}

showMenu(menu)
