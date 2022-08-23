//모듈 결합하기 export한 것들 import
import {greet, add} from './1.named.mjs'//방법1
import * as named from './1.named.mjs' // 방법2, 1.named 모두 가져옴 별명은 name
import div from './2.default.mjs' 

console.log(greet, add(1, 2)) 
console.log(named.greet, named.add(1, 2))

console.log(div(4, 2))

//