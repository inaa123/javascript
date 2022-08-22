class CoffeeMachine {
    #waterAmount //private은 #붙임

    get waterAmount() {
        return this.#waterAmount + 100 // getter이용하는거 보여줄려고 더하기하는 거임
    }

    set waterAmount(waterAmount) {
        this.#waterAmount = 2 * waterAmount
    }
}

console.log(CoffeeMachine) //코드의 집합
console.log(CoffeeMachine.prototype) // {constructor: ƒ, waterAmount: <accessor>} accessor waterAmount는 prototype에 있음, 게터세터는 프로토타입에

let machine = new CoffeeMachine()
console.log(machine) // CoffeeMachine {#waterAmount: undefined} 객체는 waterAmount속성 하나있음

machine.waterAmount = 1
console.log(machine.waterAmount) // 102. get waterAmount 사용
//여기까진 protected나 private이나 공통 .

//machine.#waterAmount = 1 // 문법에러. SyntaxError / protected와 차이
//객체의 속성을 감추고 엑세스를 통해서만 뭐시기 할래 할땐 private쓰기