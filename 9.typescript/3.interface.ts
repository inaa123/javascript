interface Profile {
    id: number //key: value
    username: string
    nickname: string
}

function printUsername(profile: Profile) {
    console.log(profile.username)
}

const profile: Profile = { //profile의 타입은 Profile
    id: 1,
    username: 'cain',
    nickname: 'hero'
}

printUsername(profile)
console.log(typeof profile) // object

// 
interface Relationship { //나만의 타입 만들기....
    from: Profile //인터페이스타입들 다 쓸 수 있다.
    to: Profile
}

const relationship: Relationship = {
    from: { //from은 Profile타입 => {} 로 
        id: 1,
        username: 'cain',
        nickname: 'hero'
    }, 
    to: {
        id: 2,
        username: 'abel',
        nickname: 'warrior'
    }
}

//
interface Account extends Profile {
    email: string
    password: string
}

// 과제: {}안을 채워라.
const account: Account = {
    id: 3,
    username: 'myeongsoo',
    nickname: 'babo',
    email: 'abc@gmail.com',
    password: 'baboibnida'
}

//
interface User {
    id: number
    username: string
    photoUri?:string // 사진은 옵션. ?쓴다 올려도되고안해도되고
}

let user: User = {
    id: 1,
    username: 'abel'
} // { id: 1, username: 'abel'}

user = {
    id: 1,
    username: 'abel',
    photoUri: 'face.jpg', 
} // { id: 1, username: 'abel',  photoUri: 'face.jpg'}

console.log(user)

//
interface Shape {
    getArea(): number
    getPerimeter(): number
}

class Circle implements Shape {
    constructor(private radius: number) {}
    //오버라이딩
    getArea() {
        return Math.PI * Math.pow(this.radius, 2) //pow로 r제곱 표현
    }

    getPerimeter(): number {
        return 2 * Math.PI * this.radius //2파이r 원둘레
    }
}

class Rectangle implements Shape {
    constructor(private width: number, private height: number) {}

    getArea(): number {
        return this.width * this.height
    }

    getPerimeter(): number {
        return 2 * (this.width + this.height)
    }
}

const circle = new Circle(4)
const rectangle = new Rectangle(4, 6)

console.log(circle.getArea(), rectangle.getPerimeter())