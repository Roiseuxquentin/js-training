'use strict'

/*
 * Create a function `keepFirst` takes a string
 * and only keep the 2 first characters
 *
 * Create a function `keepLast` takes a string
 * and only keep the 2 last characters
 *
 * Create a function `keepFirstLast` takes a string
 * and only keep 2 characters from the third character
 *
 */

//methode decomseiller , transformer le str en array avant de faire les op , conflit sous IE

const keepFirst = (str) =>
{
	let str2
	return (str2 = str[0] + str[1]) 

}

const keepLast = str =>
{
	let str2
	return (str2 = str[str.length - 2] + str[str.length - 1]) 
} 

const keepFirstLast = str => {
	let str2
	return (str2 = str.substr(2,2))

} 

console.log(keepFirst('bonjour'))
console.log(keepLast('bonjour'))
console.log(keepFirstLast('bonjour'))
//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof keepFirst, 'function')
assert.strictEqual(keepFirst('bonjour'),'bo')
assert.strictEqual(typeof keepLast, 'function')
assert.strictEqual(keepLast('bonjour'),'ur')
assert.strictEqual(typeof keepFirstLast, 'function')
assert.strictEqual(keepFirstLast('bonjour'),'nj')
// End of tests */
