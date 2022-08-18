let user = {
    name: 'neo'
}

function greet() {
    console.log(`I am ${this.name}.`)
}

greet() 

let fn = greet.bind(user)  //bind
fn()

setTimeout(fn, 100)

//
user = {
    name: 'john',
    greet() {
        console.log(`I am ${this.name}.`)
    }
}

// 과제: fn에 user.greet을 할당하라. 
//       greet의 this 엔 user가 담겨 있다.
fn = user.greet.bind(user)
setTimeout(fn, 200)

console.log(fn == user.greet) //false, 서로 다른 객체임. 논리적으론? 같다고 생각?

//call과 bind의 공통점. 파라미터로 받은 것(user)를 this변수 안에 집어넣는다
//call과 bind의 차이점. call은 주어펑션을 call하는 것, bind는 주어펑션을 리턴한다.
