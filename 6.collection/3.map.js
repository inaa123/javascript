let map = new Map()
//key와 value 타입 다양
map.set('1', 'hello')
map.set(1, {name: 'david'}) 
map.set(true, function fn() {}) //set으로 쓰기

console.log(map.get('1'), map.get(1), map.get(true)) //get으로 읽기
console.log(map.has('1'), map.has(1), map.has(true), map.has(false)) //map에 키가있는지 확인 .has
console.log(map.size)//map에 들어있는 entry개수

console.log(map.delete(1), map.delete(2)) //성공 true, 실패 false
console.log(map)

map.clear()
console.log(map)
//key자동생성 array, key지정 map쓰기
//
map = new Map()
map.set(1, 'amella').set(2, 'avery').set(3, 'adela')
console.log(map)

//
let greens = new Map([ //파라미터로 배열
    ['cucumber', 500],
    ['tomato', 350],
    ['onion', 50]
])

for(let entry of greens)
    console.log(entry)

let keys = greens.keys() //key만
console.log(keys) 

for(let key of keys)
    console.log(key)

let values = greens.values()
console.log(values)
for(let value of values) console.log(value)

greens.forEach((val, key) => console.log(key, val))

//
let user = {
    name: 'aiden',
    age: 50
}

let entries = Object.entries(user)
console.log(entries)
console.log(new Map(entries))

//
map = new Map()
map.set('apple', 1)
map.set('orange', 2)
map.set('pear', 3)

fruits = Object.fromEntries(map)
console.log(fruits)
