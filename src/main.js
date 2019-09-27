import { name } from '../package.json'

console.log(`${name} says hello`)

class Animal {
  constructor () {
    this.type = 'animal'
  }
  says (say) {
    console.log(this.type + ' says ' + say)
  }
}

class Cat extends Animal {
  constructor () {
    super()
    this.type = 'cat'
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const animal = new Animal()
  animal.says('hello') // animal says hello

  const cat = new Cat()
  cat.says('hello') // cat says hello
})
