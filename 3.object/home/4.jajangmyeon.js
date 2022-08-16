/* 과제:
~를 객체지향으로 refactoring 하라.
*/

function Food(name) {
    this.name = name
}

function Chef(food) {
    this.cook = food => new Food(food)
}

function Waiter(food) {
    this.serve = food => console.log(food)
}