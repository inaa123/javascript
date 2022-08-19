class Article {
    static publiser = 'ddanzi' //static 변수.

    constructor(title, viewCnt) {
        this.title = title
        this.viewCnt = viewCnt
    }

    static compare(article1, article2) {
        return article1 - article2
    }
    
    toString() {
        return this.title
    }

    valueOf() {
        return this.viewCnt
    }

    [Symbol.toPrimitive](hint) { //Symbol.toPrimitive쓰면 위에 구닥다리 toString과 valueOf는 안씀!
        return hint == 'number' ? this.viewCnt : this.title
    }
}

console.log(Article.publiser) //static변수는 바로 쓸 수 있음.

//
Article.address = 'seoul' 
console.log(Article.address)

Article.getPrice = () => 2000
console.log(Article.getPrice())

//
let article1 = new Article('java', 100)
let article2 = new Article('javascript', 10)

console.log(Article.compare(article1, article2)) // compare는 static변수여서 클래스.compare사용

//
console.log(`${article1}`)
console.log(article1 + '')

//
console.log(article1.publiser, article1.address, article1.compare) //undefined undefined undefined => static변수는 객체안이 아니라 클래스 안에 있다.
