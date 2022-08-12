function Person() {
	this.firstname = 'Bob',
	this.lastname = 'Roberts'
}

let john = new Person(); // Works
let steve = Person(); // Cannot set properties of undefined (setting 'firstname')
console.log([john, steve])

function Person() {
	this.firstname = 'Bob'
	this.lastname = 'Roberts'
	return {ruined: 'person'}
} // {ruined: 'person'}

function Person(firstname, lastname) {
	this.firstname = firstname
	this.lastname = lastname
}

let first = new Person("Josh", "Peck");
let second = new Person("Drake", "Bell");
console.log([first, second])