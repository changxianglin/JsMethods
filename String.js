// String
// string.charAt(pos)
Function.prototype.method = function (name, func) {
    if (!this.prototype[name]) {
        this.prototype[name] = func
    }
    return this
}

var name = 'Curly'
var initial = name.charAt(0)

console.log(initial)

String.method('charAt', function (pos) {
    return this.slice(pos, pos + 1)
})

// string.charCodeAt(pos)
var name = 'Curly'
var initial = name.charCodeAt(0)
console.log(initial)

// string.concat(string...)
var s = 'C'.concat('a', 't')
console.log(s)

// string.indexOf(searchString, position)
var text = 'Mississippi'
var p = text.indexOf('ss')
console.log(p)
p = text.indexOf('ss', 3)
console.log(p)
p = text.indexOf('ss', 6)
console.log(p)

// string.lastIndexOf(searchString, position)
var text = 'Mississippi'
var p = text.lastIndexOf('ss')
console.log(p)
var p = text.lastIndexOf('ss', 3)
console.log(p)
var p = text.lastIndexOf('ss', 6)
console.log(p)

// string.localeCompare(that)
var m = ['AAA', 'A', 'aa', 'a', 'Aa', 'aaa']
m.sort(function (a, b) {
    return a.localeCompare(b)
})
console.log(m)

// string.match(regexp)
// add regexp compare

// string.replace(searchValue, replaceValue)

// string.search(regexp)
var text = 'and in it he says "Any damn fool could'
var pos = text.search(/["']/)
console.log(pos)

// string.slice(start, end)
var text = 'and in it he says "Any damn fool could'
var a = text.slice(18)
console.log(a)
var b = text.slice(0, 3)
console.log(b)
var c = text.slice(-5)
console.log(c)
var d = text.slice(19, 32)
console.log(d)

// string.split(separator, limit)
var digits = '0123456789'
var a = digits.split('', 5)
console.log(a)

var ip = '192.168.1.0'
var b = ip.split('.')
console.log(b)

var c = '|a|b|c|'.split('|')
console.log(c)
var text = 'last, first , middle'
var d = text.split(/\s*, \s*/)
console.log(d)

var f = '|a|b|c|'.split(/\|/)
console.log(f)

// string.substring(start, end)

// string.toLocalLowerCase()

// string.toLocalUpperCase()

// string.toLowerCase()

// sting.toUpperCase()

// string.fromCharCode(char...)
var a = String.fromCharCode(67, 97, 116)
console.log(a)