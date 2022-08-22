class CoffeeMachine {
    waterAmount //커피머신의 속성?. 객체를 구분하는 속성.

    constructor(voltage) {
        this.voltage = voltage //또다른 속성: 전압
    }
}

console.log(CoffeeMachine)
/* 이 코드들이 클래스
class CoffeeMachine {
    waterAmount //커피머신의 속성?. 객체를 구분하는 속성.

    constructor(voltage) {
        this.voltage = voltage //또다른 속성: 전압
    }
}
*/
console.log(Object.keys(CoffeeMachine)) //(0) []
console.log(CoffeeMachine.prototype) //{constructor: ƒ} , waterAmount는 prototype도 아님

let machine = new CoffeeMachine(220)
console.log(machine) // CoffeeMachine {waterAmount: undefined, voltage: 220} machine객체에 비로소 waterAmount존재ㅣ.

machine.waterAmount = 1
machine.voltage = 100
console.log(machine) //CoffeeMachine {waterAmount: 1, voltage: 100}

//
CoffeeMachine = class { //protected
    _waterAmount  // _  ,객체에 저장

    get waterAmount() { //getter, setter 속성명 쓸때엔 _빼고
        return this._waterAmount + 100
    } 

    set waterAmount(waterAmount) {
        this._waterAmount = 2 * waterAmount
    } //getter와 setter accessor -> prototype에 저장
}

console.log(CoffeeMachine.prototype) // {constructor: ƒ, waterAmount: <accessor>} (20번줄과 비교)

machine = new CoffeeMachine() //객체생성
console.log(machine) // CoffeeMachine {_waterAmount: undefined}

machine.waterAmount = 1
console.log(machine) //CoffeeMachine {_waterAmount: 2} 워.어가 2 =>setter를사용함
console.log(machine.waterAmount) // 102 => getter를 이용함을 알수있음,..

machine._waterAmount = 11
console.log(machine._waterAmount) // 11
