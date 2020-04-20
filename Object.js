// Object
// object.hasOwnProperty(name)

var a = {member: true}
var b = Object.create(a)
var t = a.hasOwnProperty('member')
var u = b.hasOwnProperty('member')
var v = b.member

console.log(t, u, v)