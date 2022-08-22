function laugh(cnt) {
    if(cnt <= 0 || Math.trunc(cnt) != cnt)
        throw new Error('반복 횟수는 자연수이어야 합니다.')
    
    let phrase = ''
    for(let i = 0; i < cnt; i++) phrase += 'ha '

    return phrase
}

let diff //difference
let start = Date.now() 

try {
    console.log(laugh(3))
    laugh(3.1)
} catch(e) {
    console.log(e.message)
} finally { //finally블럭은 try,catch 성공실패했든 실행?
    diff = Date.now() - start //작업시간
}

console.log(`경과 시간: ${diff}ms`)