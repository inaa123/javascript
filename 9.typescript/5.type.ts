type Man = { //Man 타입 만들기
    name: string
}

const man: Man = {
    name: 'john'
}

//
type Men = Man[]

const men: Men = [{name: 'neo'}]

//
type Color = 'red' | 'green' | 'blue'
let color: Color = 'red'
//color = 'yellow'

//
type Employee = Man & { //Man타입 확장
    job: string
}

const employee: Employee = {
    name: 'berg',
    job: 'programmer'
}
//인터페이스는 오브젝만 . 타입은 오브젝스트링넘버 가지고도 디자인 할수있다.