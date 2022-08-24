function wrap<T>(value: T): T {
    return value
}

const output = wrap('hello')
console.log(output) //hello

//
interface Woman {
    name: string
}

const woman: Woman = {name: 'hera'}
const woman2 = wrap(woman)
console.log(woman2) // {name: hera}

//
interface Item<T> {
    id: number
    data: T
}

interface Animal {
    name: string
}

interface Place {
    location: string
}

const animalItem: Item<Animal> = {
    id: 1,
    data: {
        name: 'cat'
    }
}

const placeItem: Item<Place> = {
    id: 2,
    data: {
        location: 'seoul'
    }
}

//
type Product<T> = {
    id: number
    data: T
}

class Queue<T> {
    list: T[] = [] //초기값으로 배열할당

    get length() {
        return this.list.length
    }

    enqueue(item: T) {
        this.list.push(item)
    }

    dequeue() { //dequeue 꺼낸다
        return this.list.shift()
    }
}

const queue = new Queue<number>() //queue타입은 : Queue<number>
queue.enqueue(0)
queue.enqueue(1)

let val = queue.dequeue()
val = queue.dequeue()
console.log(val)