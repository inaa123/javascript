class Food {
    constructor(taste, name) {
        this.taste = taste
        this.name = name
    }

    [Symbol.toPrimitive]() { //객체를 문자나 숫자값으로 바꾸는 걸 serializing 시리얼라이징
        return `${this.taste} ${this.name}`
    }
}

class Chef {
    constructor(taste) {
        this.taste = taste
    }

    cook(foodName) { //요리하는게 약속이다... 
        return new Promise((resolve, reject) => {  //executor : 요리하다를표현
            setTimeout(() => resolve(new Food(this.taste, foodName)),1000) 
        }) //아직 음식이준비가 안됨. 아직 완료되지 않는 시작지점의 약속
    }
}

class Waiter { //웨이터는 손님에게 약속을 한다.. 그 약속은 음식이 다 만들어지면
    async order(foodName, chef) {
        return await chef.cook(foodName) // await을 쓰면 끝나는 지점의 약속. 
    }
}

let chef1 = new Chef('달콤한')
let chef2 = new Chef('매운')
let waiter = new Waiter()

waiter.order('짜장면', chef1).then(food => console.log(food + ''))
//then핸들러는 주어객체의 result값을 파라미터로 받는다. 프라미스엔 food음식이 있다,