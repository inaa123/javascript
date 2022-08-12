if(true){}
if(false){} else {}

if(undefined) {console.log('!')} //boolean (undefined) -> false여서 건너뜀
if(null) {console.log('!')}
if(0) {console.log('!')}
// if(a == 0){} =>자바 관점, 이렇게 쓰지 마! if(a) {} 라고 씀! 이게 자바스크립트관점

if(-1) {console.log('!')} //boolean 값이 있다 true -> !출력

console.log(true ? 1 : 0) //3항연산자 조건문이 true이면 

let val //val이란 변수?선언 , 한줄에 명령문 하나면 ;안써도 됨! 명령문 n개면 ;써야함

switch('boo') {
    case 'bar': val = 'bar'; break
    case 'bar': val = 'baz'
    default: val = 'all right.'
}

console.log(val)