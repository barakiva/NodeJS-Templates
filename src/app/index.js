import express from "express";

import helper from "./helper.js";

import {pickApple, pickPear, farmer, season} from './orchard.js'
import wheatField from './field.js'

const app = express();
let port;
await helper.findFreePort.then((res)=> port = res)

app.get('/', (req, res) => {
    res.send("Hello template")
})

app.listen(port, (req, res) => {
    console.info(`Listening on port ${port}`)
})

// console.log(pickApple(), pickPear(), farmer, season)


var person = {
	firstName: 'John',
	lastName: 'Smith',
	thirdName: 'plumbus',
	getFullName: function() {
		return this.firstName + this.lastName;
	}
}
var son = {
	firstName: 'morty',
	lastName: 'sanchez'
}
var granddaughter = {
	firstName: "jessica",
	lastName: "junior"
}
console.dir(person.getFullName())
son.__proto__ = person;
console.dir(son.thirdName) // Looks up property in son > go down in the prototype chain > 

var a = {}
var b = function() {}
var c = []

// a.__proto__.toString()
// console.dir(Object.keys(
// 	Object.getPrototypeOf(a)
// ))
