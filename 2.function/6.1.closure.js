const age = 16 // global객체에 생김
//sayAge() //TypeError: sayAge is not a function.
//tellAge() //ReferenceError: tellAge is not defied. 레퍼런스에러 없는건 이 에러 뜬다
console.log(sayAge)
//console.log(hello) 

{
    let age = 10 //age local객체에 생김

    function sayAge() { // 6~8은 실행문이 아님...
        console.log(age)
    }

    let tellAge = function() {
        console.log(age)
    }

    sayAge()
    tellAge()
}

sayAge()
tellAge() //reference 에러. 위랑 마찬가지로...?
