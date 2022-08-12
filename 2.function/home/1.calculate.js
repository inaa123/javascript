/* 과제 :
산술 연산 함수를 만든다.

1. (값1, 값2, 연산자) 가 parameter이다.
2. parameter value 들은 string type이다. (function선언때X, function call할때)
3. 연산자는 -, *, /로 한정한다.
4. client가 연산자를 안정하면, *을 연산자로 쓴다.
5. 연산 결과값을 return한다.
*/

let calculate = function(a, b, op='*') {
    let result

    switch(op) {
        case '-': result = a - b; break
        case '*': result = a * b; break
        case '/': result = a / b
    }

    return result
}

console.log(calculate('1', '2', '-'))
console.log(calculate('2', '2',))