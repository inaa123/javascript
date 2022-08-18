/* 과제:
~를 객체지향으로 refactoring 하라.
*/
function Food(taste, name) {//음식을 맛으로 구분->파라미터로taste
    this.taste = taste
    this.name = name
} 

function Chef(taste) { 
    this.cook = foodName => new Food(taste, foodName)// 손님은 맛으로 셰프를 구분하지만, 이는 셰프의 속성이 아닌 음식의 속성 
}
//위 taste는 chef를 생성할때, 아래 foodName은 cook메서드를 콜할때

function Waiter() {
    this.order = (foodName, chef) => chef.cook(foodName) //주문받을때 맛과 어느셰프
}

let Chef1 = new Chef('달콤한')
let Chef2 = new Chef('매운')
let waiter = new Waiter()

waiter.order('짜장면', chef1)
waiter.order('짜장면', chef2)