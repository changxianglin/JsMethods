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

// Array.sort(comparefn)
var n = [4, 8, 15, 16, 23, 42]
var m = n.sort()
console.log(m)

var r = n.sort(function (a, b) {
    return a - b
})
console.log(r)

var m = ['aa', 'bb', 'a', 4, 8, 15, 16, 23, 42]
var t = m.sort(function (a, b) {
    if (a === b) {
        return 0
    }
    if (typeof a === typeof b) {
        return a < b ? -1 : 1
    }
    return typeof a < typeof b ? -1 : 1
})
console.log(t)

var by = function (name) {
    return function (o, p) {
        var a, b;
        if (typeof o === 'object' && typeof p === 'object' && o && p) {
            a = o[name]
            b = p[name]
            if (a === b) {
                return 0
            }
            if (typeof a === typeof b) {
                return a < b ? -1 : 1
            }
            return typeof a < typeof b ? -1 : 1
        } else {
            throw {
                name: 'Error',
                message: 'Expected an object when sorting by ' + name
            }
        }
    }
}

var s = [
    {first: 'Joe', last: 'Besser'},
    {first: 'Moe', last: 'Howard'},
    {first: 'Joe', last: 'DeRita'},
    {first: 'Shemp', last: 'Howard'},
    {first: 'Larry', last: 'Fine'},
    {first: 'Currly', last: 'Howard'},
]

var ss = s.sort(by('first'))
console.log(ss)

var xx = s.sort(by('first')).sort(by('last'))
console.log(xx) // have some question

var by = function (name, minor) {
    return function (o, p) {
        var a, b;
        if (o && p && typeof o === 'object' && typeof p === 'object') {
            a = o[name]
            b = p[name]
            if (a === b) {
                return typeof minor === "function" ? minor(o, p) : 0
            }
            if (typeof a === typeof b) {
                return a < b ? -1 : 1
            }
            return typeof a < typeof b ? -1 : 1
        } else {
            throw {
                name: 'Error',
                message: 'Expected an object when sotring by ' + name
            }
        }
    }
}

var ee = s.sort(by('last'), by('first'))
console.log(ee)

// Array.splice(start, deleteCount, item...)
var a = ['a', 'b', 'c']
var r = a.splice(1, 1, 'ache', 'bug')
console.log(r)

Array.method('splice', function (start, deleteCount) {
    var max = Math.max,
        min = Math.min,
        delta,
        element,
        insertCount = max(arguments.length - 2, 0),
        k = 0,
        len = this.length,
        new_len,
        result = [],
        shift_count;

    start = start || 0;
    if (start < 0) {
        start += len
    }
    start = max(min(start, len), 0)
    deleteCount = max(min(typeof deleteCount === 'number' ? deleteCount : len, len - start), 0)
    delta = insertCount - deleteCount
    new_len = len + delta
    while (k < deleteCount) {
        element = this[start + k]
        if (element !== undefined) {
            result[k] = element
        }
        k += 1
    }
    shift_count = len - start - deleteCount
    if (delta < 0) {
        k = start + insertCount
        while (shift_count) {
            this[k] = this[k - delta]
            k += 1
            shift_count -= 1
        }
        this.length = new_len
    } else if (delta > 0) {
        k = 1
        while (shift_count) {
            this[new_len - k] = this[len -k]
            k += 1
            shift_count -= 1
        }
        this.length = new_len
    }
    for (k = 0; k < insertCount; k += 1) {
        this[start + k] = arguments[k + 2]
    }
    return result
})

// Array.unshift(item...)
var a = ['a', 'b', 'c']
var r = a.unshift('?', '@')
console.log(r)

Array.method('unshift', function () {
    this.splice.apply(
        this,
        [0, 0].concat(Array.prototype.splice.apply(arguments)))
    return this.length
})