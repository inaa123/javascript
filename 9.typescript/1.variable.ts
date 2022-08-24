let msg: string = 'hello'
// msg = 1  error, type이 맞지않음, \msg는 string타입.

let val: number = 1
let nullableStr: string | null = null //string, null이 올수있다.
nullableStr = 'hi' //변수하나에 n개 할당 가능..?
// nullableStr = undefined / error undefined는 string,null이 아님

let undefinedOrNumber: undefined | number
undefinedOrNumber = 10
undefinedOrNumber = undefined

let numberOrStringOrNull: number | string | null = null
numberOrStringOrNull = 1
numberOrStringOrNull = 'Bye'
numberOrStringOrNull = null

let isCompleted: boolean = true //변수명 is로 시작하면 BOOLEAN~쓰쟝~
isCompleted = false
// isCompleted = 0 / type 안맞음.

let anyValue: any = null //any타입 받을 수있다.,근데 이러면 타입스크립쓸이유X,.. 
anyValue = undefined
anyValue = 1
anyValue = 'hello'

// 타입을 컴파일러가 알아서 판단
let a = 1
let b = 'b'
let c = true

//머리가 깨끗하면 자바스크립ㅌ느만 써도 되지만 머리가 더러우면 타입스크립트 쓰는게 좋다.