// Variables and Constants

// Comments

// Single Line Comment
/*Multi Line Comment */

// Variable Declaration - var,let,const

// var is not used nor recommended as per ES6 as it has a global scope
// Global Scope - When a variable is written right in the file instead of inside of a method or loop iteration
// Var and let work in a similar way
// Const - For values that are not going to be re-assigned at a later time

let firstName = 'John' , lastName = 'Doe'
console.log(firstName, lastName)

let age = 30
console.log(age)

// Always initialize variable before using it, else you will run tinto error

// Naming Conventions
// - Only letters, numbers, underscores and dollar signs
// - Can't start with a number

// Multi-Word Formatting
// firstName     camelCase
// first_name    underscore
// FirstName     PascalCase
// firstname     lowercase


// Re-assigning Variables
age = 40;
console.log(40)

// Declaring variables without a value

let score;

score = 100;

console.log(score);

// Const cannot be directly reassigned
// const cannot be declare without a value

// Const with arrays

const arr = [1,2,3,4]

// You cannot directly add value to an array in const variable. However, you can use array method PUSH to add a value at the end of the array

arr.push(5)
console.log(arr)

// const with objects

const person = {
    'name':'John',
    'age':40
}

// We cannot directly change the value but we can change the value of the property of the object

person.name = 'Eric'
console.log(person)

// Declare multiple values at once

let a,b,c

const d = 10, e = 20, f = 30;

// Data Types

// 1. Primitive Data Types
// 2. Reference or Object Data Types

// Primitive Data Types

/*

String - Sequence of characters. Must be in quotes or backticks
Number - Integers as well as floating point numbers
Boolean - Logical entity / true or false
Null - Intentional abscence of any object or value
Undefined - A variable that has not been defined / assigned
Symbol - Built in object whose contructor returns a unique symbol
BigInt - Numbers that are greater than the "Number" type can handle

*/

// Reference Types (Objects)

// Reference types or "objects" are a non-primitive value and when assigned to a variable, the variable is given a reference to that value

// Object literals, arrays and functions are all reference types

// Static Types vs Dynamic Types

/*

JavaScript is a dynamically-typed language. This means, we do not explicitly define the types for our variables. Many other languages are statically-typed  such as C, C++ and Java

TypeScript is a superset of JavaScript, which allows static-typing. This can make your code more verbose and less prone to errors.

*/


// String

let fName = 'Sara'

// Number

let Age = 50

// Decimal / Float

let temp = 98.9

// Boolean - True / False Value

let hasKids = true;

// Null - intentional empty value

let aptNum = null;

// Undefined - When a value is not defined

let testScore;

// Symbol

let id = Symbol('id')

// BigInt - Too big for the number type



let output = id;

// Reference Types

// Arrays, Object literals, Functions/Methods

// Arrays 

let numRefType = [1,2,3,4,5]

// Object Literals

let person1 = {
    name:'Brad',
};

// Functions / Methods

function sayHello(){
    console.log('Hello');
}

console.log(output, typeof output)


