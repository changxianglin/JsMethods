// Array.concat(item...)

var a = ['a', 'b', 'c']
var b = ['x', 'y', 'z']
var c = a.concat(b, true)
console.log(c)

// Array.join(separator)
var a = ['a', 'b', 'c']
a.push('d')
var c = a.join('')
console.log(c)

// Array.pop()
var a = ['a', 'b', 'c']
var c = a.pop()
console.log(c)

Function.prototype.method = function(name, func) {
    if (!this.prototype[name]) {
        this.prototype[name] = func
    }
    return this
}

Array.method('pop', function () {
    return this.splice(this.length - 1, 1)[0]
})

// Array.push(item...)
var a = ['a', 'b', 'c']
var b = ['x', 'y', 'z']
var c = a.push(b, true)
console.log(c)

Array.method('push', function () {
    this.splice.apply(
        this,
        [this.length, 0].concat(Array.prototype.slice.apply(arguments)))
    return this.length
})

// Array.reverse()
var a = ['a', 'b', 'c']
var b = a.reverse()
console.log(b)

// Array.shift()
var a = ['a', 'b', 'c']
var c = a.shift()
console.log(c)

Array.method('shift', function () {
    return this.splice(0, 1)[0]
})

// Array.slice(start, end)
var a = ['a', 'b', 'c']
var b = a.slice(0, 1)
var c = a.slice(1)
var d = a.slice(1, 2)

console.log(b)
console.log(c)
console.log(d)