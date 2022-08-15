import mongoose from 'mongoose'

// Schemas
const kittySchema = new mongoose.Schema({
	name: String
})
const Kitten = mongoose.model('Kitten', kittySchema)
const silence = new Kitten({ name: 'Silence' });
console.log(silence.name); // 'Silence'

kittySchema.methods.speak = function speak() {
	const greeting = this.name
	  ? "Meow name is " + this.name
	  : "I don't have a name";
	console.log(greeting);
};