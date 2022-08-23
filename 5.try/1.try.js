let json = '{"name": "john", "age": 30}'
let user = JSON.parse(json)
console.log(typeof json, typeof user)

//
json = '{age: 30}'
//JSON.parse(json) //runtimeEroor

try {
    JSON.parse(json) //error가 발생할거같은 명령문? 캐치비ㅡㄹ럭으로
} catch {
    console.log('ERROR')
}

try {
    JSON.parse(json)
} catch(e) {
    console.log(e.name, '\n', e.message, '\n', e.stack)
} 