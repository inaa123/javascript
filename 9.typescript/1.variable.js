//컴파일러가 만든것
var msg = 'hello';
// msg = 1  error, type이 맞지않음, \msg는 string타입.
var val = 1;
var nullableStr = null; //string, null이 올수있다.
nullableStr = 'hi'; //변수하나에 n개 할당 가능..?
// nullableStr = undefined / error undefined는 string,null이 아님
var undefinedOrNumber;
undefinedOrNumber = 10;
undefinedOrNumber = undefined;
var numberOrStringOrNull = null;
numberOrStringOrNull = 1;
numberOrStringOrNull = 'Bye';
numberOrStringOrNull = null;
var isCompleted = true; //변수명 is로 시작하면 BOOLEAN~쓰쟝~
isCompleted = false;
// isCompleted = 0 / type 안맞음.
var anyValue = null; //any타입 받을 수있다.,근데 이러면 타입스크립쓸이유X,.. 
anyValue = undefined;
anyValue = 1;
anyValue = 'hello';
// 타입을 컴파일러가 알아서 판단
var a = 1;
var b = 'b';
var c = true;
//머리가 깨끗하면 자바스크립ㅌ느만 써도 되지만 머리가 더러우면 타입스크립트 쓰는게 좋다.
