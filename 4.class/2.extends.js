class Animal {
    constructor(name) {
        this.name = name
    }

    run(speed) { //name과 speed는 animal prototype에존재X, this객체에 존재
        this.speed = speed //speed 객체의 속성으로 집어넣기
        console.log(this.name, this.speed, 'run.')
    }

    stop() {
        this.speed = 0
        console.log(this.name,'stop.')
    }
}

let animal = new Animal('animal')
console.log(animal) //animal객체는 속성이 name하나.

animal.run(10) //run이란 속성은 animal에 없다 prototype으로 찾아감
console.log(animal) // Animal {name: 'animal', speed: 10} speed속성 새롭게 추가됨. speed할당됐기때문, 

animal.stop() 
console.log(animal) // Animal {name: 'animal', speed: 0}

// 상속
class Rabbit extends Animal {
    /*
    constructor(...args) { //자동생성됨.
        super(...args) //자식생성자 첫번째 호출문은 super
    }
    */
    hide() { //run,stop외에 추가
        console.log(this.name, 'hide.')
    }
}

let rabbit = new Rabbit()
console.log(rabbit)

rabbit = new Rabbit('rabbit')
console.log(rabbit)

console.log(rabbit.name)
rabbit.run(100)
rabbit.hide()

//
Rabbit = class extends Animal {
    constructor(name, color) {
        super(name)
        this.color = color
    }

    stop() {
        super.stop() //Animal의 stop실행시킬때 super.
        this.hide() //내꺼 실행 this.
    }

    hide() {
        console.log(this.name, this.color, 'hide.')
    }
}

rabbit = new Rabbit('rabbit', 'black')
rabbit.stop()