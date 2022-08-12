import express from "express";
import helper from "./helper.js";
import {pickApple, pickPear, farmer, season} from './orchard.js'
import wheatField from './field.js'
import _ from 'lodash'

const app = express();
let port;
await helper.findFreePort.then((res)=> port = res)

app.get('/', (req, res) => {
    res.send("Hello template")
})

app.listen(port, (req, res) => {
    console.info(`Listening on port ${port}`)
})

function Person(firstname, lastname) {
	this.firstname = firstname
	this.lastname = lastname
}


// console.log(Array.__proto__.__proto__)
// console.log(Array.prototype.__proto__)
// console.log(Object.getPrototypeOf(Array.prototype))

function Point(x, y) {
    this.x = x;
    this.y = y;
}
var myPoint = new Point();
// the following are all true
myPoint.__proto__ == Point.prototype
myPoint.__proto__.__proto__ == Object.prototype
console.log(myPoint instanceof Point);
console.log(myPoint instanceof Object);
console.log(myPoint.__proto__ instanceof Object)

// var res = _.isEqual(new Person('steve', "jobs"), new Person('steve', 'jobs'))
var myProto = Array.__proto__
var myPrototype = Array.prototype
var res = _.isEqual(myProto, myPrototype)
console.log(res)