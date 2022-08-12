var a = {} // Object
var b = function() {} // Function Empty (), which is also an Object
var c = [] // Array, which is also an Object

//Everything is an object (at the bottom)
console.log("Object {} is %s", 
	{}.__proto__)
console.log("Array [] is %s",
	 [].__proto__)
console.log("Array's [] prototype is %s ",
	 [].__proto__.__proto__)
console.log("Function function(){} is %s",
	 function(){}.__proto__)
console.log("Function function(){} prototype is %s",
	 function(){}.__proto__.__proto__)