let foo="I am a string." //변수는 데이터타입이 없다.
foo = 'So am I' //string타입 "" '' 다 가능
foo = `back tick` //데이터(스트링 리터럴) 나타내는 세가지 "" '' ``

foo = 1 //넘버타입
foo = 1.0 //넘버타입

//내장객체 console / 객체.메소드() 호출 
console.log(1 / 0) //node 2.type.js 하면 infinity, 인피니티는 에러x 값..?
console.log('a' / 1) //NaN(Not a Number) 에러메시지X, NaN이란 값임

foo = 1
console.log(isFinite(foo)) // isFinite : 매개변수가 유한한 숫자인지 확인. 
foo = 'a'
console.log(isFinite(foo))

foo = '1'
console.log((parseInt(foo)) + 1) //parseInt가 리턴한 값이 숫자인지 확인할 수 있는 익스프레스?함.

foo = 'a' // NaN
foo = '100px' // 100
foo = '+1' //숫자가 아닌 문자
foo = '-1'
foo = '123456-789123' //하이픈을 구분자로 써써 앞으ㅣ 것만 인식.
console.log(parseInt(foo))

foo = '1.6'
console.log(parseInt(foo))
console.log(parseFloat(foo))

let a = Infinity * 2
let b = NaN * 2
console.log(a, b)

a = Infinity * NaN
console.log(a) //NaN이 더 쎔

foo = 1n

//boolean 타입 
const okay = true
const fail = false

let val = null //null값

let val2 
val2 = undefined
console.log(val2) //undefined 정의되지 않았다. 에러메시지X 값이다!

let id = Symbol('id')
console.log(typeof id)

val = 1 //val변수 데이터타입은 넘버!
val = String(val)//넘버타입을 string타입으로 바꾸기, 생성자임(new를 안썼을 뿐..3.4.하다가 갑자기 넘어옴..)
console.log(typeof val)

val = '6' / '2'
console.log(val) //자동으로 캐스팅됨. 숫자6 과 숫자 2로 캐스팅 된 후 계산된 값 출력된거야/

val = false / true
console.log(val) //false는 0 true는 1로 캐스팅됨!

val = '1'
val = Number(val) //문자를 숫자로 Number 펑션 이용! 인트까지 신경쓸땐? parseInt
console.log(typeof val) //typeof가 리턴한 값은... 스트링?이다???

console.log(Number('1'), Number(true))
console.log(Number(' '), Number(''), Number(null), Number(false)) //0으로 캐스팅 되는 것 모음
console.log(Number('a'), Number(undefined), Number(NaN))
//Boolean : 값이 있으면 TRUE 값이 없으면 FALSE
console.log(Boolean(-1), Boolean('a'), Boolean('0'), Boolean(' ')) //true값 모음 (값이 있으니 true)
console.log(Boolean(0), Boolean(''), Boolean(null), Boolean(undefined), Boolean(NaN)) //false값 모음 (문자'0'은 값이 있지만 숫자0은 값이X)


