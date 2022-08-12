let val = 1 + 2 * 3 / 2
console.log(val, 5, 4**2, 4**(1/2))

let i = 1
console.log(++i, i++)

let foo = 'hello'
let bar = 'world'
console.log(foo + ' ' + bar) //붙이기 연산자 +
console.log(1 + '2', '1' + '2') //붙이기, 3X

// unary plus operator
console.log(1 + +'2') //+기호를 문자앞에 붙여주면 숫자로 변환

console.log(1 || 0, 0 || 1) //숫자가 boolean으로 변환 후(t/f), or연산자는 마지막으로 읽은 값을 리턴하고 끝냄
                            //값이 있어서 true -> 1
console.log(1 && 0, 0 && 1) //값이 없어서 false -> 0

console.log(1 && 2, 2 && 1) //값이 있어서 마지막으로 읽은 값 -> 2

//foo && do(foo)가 값이 있으면 함수 do 출력?
//bar = baz || createBar()

console.log()
let c = 3 - (a = 1 + 2)
console.log(c)

let d = 2
d += 2
console.log(d)

console.log()
console.log('2' > 1, '01' == 1, false ==0, '' == false) //비교연산자는 문자가 숫자로 캐스팅돼서 나타남..
console.log(true > 1)

//equivalent operator
console.log(1 == '1', 1 != '1')

//identical operator
console.log(1 === '1', 1 !== '1')

console.log('z' > 'a', 'ac' > 'ab', 'bee' > 'be') //유니코드 숫자값으로 바껴서 비교함.

console.log(null > 0, null <0, null >= 0, null == 0) //null들어가면, false 그러나 >= 0 은 true.. why?
console.log(undefined > 0, undefined >= 0, undefined == 0)
console.log(NaN > 0, NaN >=0, NaN == 0)

console.log(undefined == undefined, null == null, NaN == NaN)