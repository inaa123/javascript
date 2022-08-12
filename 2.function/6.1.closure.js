const age = 16 // global객체에 생김

{
    let age = 10 //age local객체에 생김

    function sayAge() {
        console.log(age)
    }

    let tellAge = function() {
        console.log(age)
    }

    sayAge()
    tellAge()
}