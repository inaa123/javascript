let arr = new Array(1, 'hello', true, {age: 3}, function fn(){}, class A{})
console.log(arr)

arr = [null, undefined, NaN]
console.log(arr)

//
arr = []
arr[0] = 'a'
arr[2] = 'c'
console.log(arr)
console.log(arr[1]) //undefined 

console.log(arr.length)

//
let matrix = [
    [1, 2],
    [3, 4]
]

//
let a = [1, 2]
let b = [2, 3]
let c = a.concat(b) //배열.concat(배열)
console.log(c)

arr = []
arr.push(1)
arr.push(2)
arr.push(3) //수직으로 생각

console.log(arr)
console.log(arr.pop()) // 젤 꼭대기 값 꺼냄 (lifo)
console.log(arr) //pop으로 꺼내고 나면 사라짐

//
arr = []
arr.push(1)
arr.push(2)
arr.push(3) //수평으로 연상

console.log(arr)
console.log(arr.shift()) //먼저 들어온 놈이 먼저 나감.(fifo)
console.log(arr)

//
a = [0, 1, 2]
b = a.slice(1) // [1, 2] 1번인덱스~마지막인덱스 잘라내기, a값이 아닌 새로운 배열을 만들어 리턴한것.?
console.log(b, a) 

//
arr = [0, 7, 8, 5]
arr.splice(1, 2, 1, 2, 3, 4) //시작인덱스, 끝인덱스 잘라내고, 집어넣을 원소 나열
console.log(arr)

//
arr = ['a', 'b', 'c']
console.log(arr.indexOf('b')) //b원소의 인덱스번호 알려줌

arr.splice(arr.indexOf('b')) //b이후로 잘라내기
console.log(arr)

arr = ['a', 'b', 'c', 'd']
arr.splice(arr.indexOf('b'), 1) //두번째 파라미터는 개수.
console.log(arr)

//
arr = [4, 3, 1, 2]
let s = arr.sort() // sort - 오름차순 정렬
console.log(arr, s)
// 과제: s가 arr인지, 확인하라.
console.log(s == arr)

arr = [8, 11, 22, 34, 9]
console.log(arr.sort()) //sort 메서드는 원소를 string으로 취급한다.

console.log(arr.sort((a, b) => a - b)) // 숫자 취급, 오름차순정렬
console.log(arr.sort((a, b) => b - a)) // 내림차순정렬

//
arr = ['a', 'b', 'c']
for(let i = 0; i < arr.length; i++)
    console.log(arr[i])

//과제: 원소를 출력하라.
for(let key in arr) console.log(arr[key]) //index가 key가됨, in을 쓰면 key를 읽고

for(let val of arr) console.log(val) //of를 쓰면 value를 얻을 수 있다.

// for each
function print(e) {
    console.log(e)
}

function print2(e, i) { //e: element i:index
    console.log(`[${i}]: ${e}`)
}

function print3(e, i, arr) { //element의 원소를 배열로 받고 대문자로 전환
    arr[i] = e.toUpperCase()
}

arr = ['a', 'b']

arr.forEach(print)

arr.forEach(print2)
console.log(arr) //forEach를 써도 주어 데이터는 여전히 남아있음! 사라지지X

arr.forEach(print3)
console.log(arr)  //대문자로 바뀜

//
arr = [1, 2, 3]
let arr2 = arr.map(e => e * 2) //콜백처리된 배열?을 다시 리턴. map(가공처리)
console.log(arr, arr2)

//
let group = {
    title: 'art',
    students: ['winston', 'cal', 'maritha'],
    list() {
        this.students.forEach(studentName =>
            console.log(this.title, ':', studentName)) //iterating
    }
}

group.list()

//배열을 string으로
arr = ['hello', 'world', 2]
let greeting = arr.join()
console.log(greeting) //구분자,로 붙여서 문자열로만듦
console.log(typeof greeting) //string

console.log(arr.join('/')) //다른 구분자
//과제: join()에서 'helloworld2를 리턴하라.
console.log(arr.join(''))

//
arr = [1, 2, 3]
str = arr.toString() // 기본형태의 join과 같음
console.log(str, '/', typeof str)

//
str = JSON.stringify(arr)
console.log(str, '/', typeof str)