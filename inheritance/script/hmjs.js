
class Builder {
    constructor(value){
        this.value = value
        }
        get(){
            return this
        }
}


function IntBuilder(value){
    this.value = value  
}

IntBuilder.prototype = Object.create(Builder.prototype)

IntBuilder.prototype.plus = function(...arg){
    let sum = 0
    for(let i=0; i<arg.length; i++){
    sum = sum + arg[i]
    }
    this.value = this.value + sum
    return this
}

IntBuilder.prototype.minus = function(...arg){
    let sum = 0
    for(let i=0; i<arg.length; i++){
    sum = sum + arg[i]
    }
    this.value = this.value - sum
    return this

}

IntBuilder.prototype.multiply = function(num){
    this.value = this.value * num
    return this
}

IntBuilder.prototype.divide = function(num){
    this.value = Math.floor(this.value / num)
    return this
}

IntBuilder.prototype.mod = function(num){
    this.value = this.value % num
    return this
}

IntBuilder.prototype.random = function (min, max,) {
    this.min = min
    this.max = max
    this.value = Math.floor(Math.random()*(this.max - this.min + 1)) + this.min
    return this
  }

const intBuilder = new IntBuilder(10)
intBuilder
.plus(2,3,2)
.minus(1,2)
.multiply(2)
.divide(4)
.mod(3)
.get()




class StringBuilder extends Builder{
    constructor(value){
        super(value)
        this.value = value
    }

    plus(...arg){
        let ourString = ''
        for (var i = 0; i < arg.length; i++) {
           ourString += arg[i] ;
          }
        this.value = this.value + ourString
        return this

    }

    minus(num){
        this.value = this.value.slice(0, -num)
        return this

    }

    multiply(num){
        this.value = this.value.repeat(num)
        return this
    }

    divide(num){
        this.value = this.value.slice(0, num)
        return this

    }

    remove(symbol){

        this.value = this.value.split('').filter(item => item !== symbol).join('')
        return this

    }

    sub(...arg){
   
        this.value = this.value.substr(arg[0], arg[1])
        return this

    }
}

const strBuilder = new StringBuilder('Hello ')
strBuilder
.plus(' all', '!')
.minus(2)
.multiply(3)
.divide(4)
.remove('l')
.sub(1, 1)
.get()


