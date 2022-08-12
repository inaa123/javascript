let a = 1 //global scope
//let a -> 에러; a는 선언이 되어있다.

{ //global scpoe안에 {}써서 작은 scope만들기
    console.log(a) // local scope
}

{
   let a = 2 //local scope  , scope이 다르면 변수 선언 가능(a써도 에러X)
   console.log(a) //local의 a, 실행시 가까이 있는 a 사용?함!
}

console.log(a) // global의 a, (local의 a는 사라짐. 블럭이 닫혔기때문에)