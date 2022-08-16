function Gun() {
    this.fire = () => console.log('탕탕') //key fire value는 functio
}

function Shooter(name, gun) { //gun을 callback으로 쓰고있음..
    this.name = name
    this.fire = () => gun.fire() //gun을 defendency로
}

let gun = new Gun() //총 한자루
let shooter1 = new Shooter('최한석', gun)
let shooter2 = new Shooter('한아름', gun) //총 한자루 한석이아름이 동일하게 사용

shooter1.fire()
shooter2.fire()

//
function Ball() {}

function Player(name) { //객체엔 속성과 행동이 있다. 행동은 function으로표현
    this.name = name //이름은 속성
    this.pass = ball => ball //행동은 method - function이 할당..
    this.kick = ball => ball
}

const ball = new Ball()
const player1 = new Player('최한석')
const player2 = new Player('한아름')
const player3 = new Player('양승일')

// 과제: 다음 이야기를 표현하라.
// 최한석이 한아름에게 공을 패스했다. 한아름은 양승일에게 공울 패스했다. 
// 양승일은 공을 찼다.

console.log(player3.kick(player2.pass(player1.pass(ball))))

//
function Food(name) {
    this.name = name
}

function Mom() {
    this.cook = foodName => new Food(foodName)
}

function Child() {
    this.eat = food => console.log(food)
}

const mom = new Mom()
const child = new Child()

child.eat(mom.cook('짜장면'))
