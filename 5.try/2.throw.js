let json ='{"age": 30}'

try {
    let user = JSON.parse(json)
    
    //과제: user객체가 준비되면, user.age를 출력하라.
    //user && console.log(user.age) 과제답/ 과제끝

    if(user.name) console.log(user.name) //user.name이있으면
    else throw new SyntaxError('user.name이 없습니다.') //에러처리, throw ERROR객체, error발생시 catch블럭으로~
} catch(e) {
    if(e instanceof SyntaxError)
        console.log('ERROR: ' + e.message)
    else throw e //마지막으로 던져진 애는 node js가 받음.
}

//ERROR: user.name이 없습니다.