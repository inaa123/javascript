let user = {
    name: 'madonna',
    greet() {
        console.log(`I am ${this.name}.`)
    }
}

user.greet()

//
setTimeout(user.greet, 100) //undefined 이유는? greet함수 가져올 때 주어객체가 없어서

let fn = user.greet
setTimeout(fn, 200)

//
setTimeout(() => user.greet(), 300) //greet펑션 등록한게 아니라......이름없는 펑션을 등록..?