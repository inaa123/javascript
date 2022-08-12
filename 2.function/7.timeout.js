function sayHi() {
    console.log('Hi')
}

setTimeout(sayHi, 1000)// setTimeout은 첫번째 파라미터를 푸리?에 집어넣었다가 내가지정한 시간 후에 다시 꺼냄

//
function greet(phrase, who) {
    console.log(phrase, who)
}

setTimeout(greet, 2000, 'hello', 'knox') //great펑션에 나올 값 지정?할수있음...??

//
let timeId = setTimeout(() => console.log('hoo'), 3000)
clearTimeout(timeId) //큐?에서 제거시키는 것