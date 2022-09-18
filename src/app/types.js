
const str = "World"
const strNew = new String('World')
const strNewWrap = String('World')
const int = 10
const arr = []
const bool = true
const nothing = null
const bs = undefined
const obj = {}
const func = function() {}

export function typesOf() {
    const str = "world"
    const int = 10
    const arr = []
    const bool = true
    const obj = {}
    const func = function() {}
    console.log(typeof str)
    console.log(typeof int)
    console.log(typeof arr)
    console.log(typeof bool)
    console.log(typeof obj)
    console.log(typeof func)
}
export function primitiveInstances() {
    // https://stackoverflow.com/questions/203739/why-does-instanceof-return-false-for-some-literals
    "foo" instanceof String //=> false
    "foo" instanceof Object //=> false

    true instanceof Boolean //=> false
    true instanceof Object //=> false
    false instanceof Boolean //=> false
    false instanceof Object //=> false

    12.21 instanceof Number //=> false


    // [0,1] instanceof Array //=> true
    // {0:1} instanceof Object //=> true
}
export function instances() {
    // Correct way to check for primitive types
    console.info(" Correct way to check for primitive types")
    console.log(typeof 'example string' === 'string') // true
    console.log(typeof true === 'boolean') // true
    console.log(typeof 5 === 'number') // true
    // Wrong way
    console.info("And the wrong way")
    console.log(str instanceof String) // false
    console.log(true instanceof Boolean) // false
    console.log(42 instanceof Number) // false
    // Checking primitives VS their respective wrappers
    console.info('Checking primitives VS their respective wrappers')
    console.log(true instanceof Boolean)
    console.log(new Boolean(true) instanceof Boolean)
    console.log(0 instanceof Number)
    console.log(new Number(0) instanceof Number)
    console.log("hey" instanceof String)
    console.log(new String("hey") instanceof String)

}
function classOf(value) {
    return Object.prototype.toString.call(value).slice(8, -1);
}
function isString(s) {
    return typeof(s) === 'string' || s instanceof String;
}
export function betterWay() {
    console.log(classOf(true));              // [object Boolean]
    console.log(classOf(0));                 // [object Number]
    console.log(classOf(""));                // [object String]
    console.log(classOf(new Boolean(true))); // [object Boolean]
    console.log(classOf(new Number(0)));     // [object Number]
    console.log(classOf(new String("")));    // [object String]
}
