'use strict'

/*
 * Create the function `cutFirst` that takes a string and remove the 2 last characters
 * Create the function `cutLast` that takes a string and remove the 2 first charcters
 * Create the function `cutFistLast` that takes a string
 * and remove the 2 first charcters and 2 last characters
 *
 */


const cutFirst = (str) => {
	
	return str.slice(0,-2)
	
}

const cutLast = (str) => {
	return str.slice(2)
}

const cutFirstLast = (str) =>{
	return str.slice(2,-2)

}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof cutFirst, 'function')
assert.strictEqual(typeof cutLast, 'function')
assert.strictEqual(typeof cutFirstLast, 'function')


assert.strictEqual(cutFirst('bonjour'), 'bonjo')
assert.strictEqual(cutFirst('whiSp'), 'whi')
assert.strictEqual(cutLast('bonjour'), 'njour')
assert.strictEqual(cutLast('whiSp'), 'iSp')
assert.strictEqual(cutFirstLast('bonjour'), 'njo')
assert.strictEqual(cutFirstLast('whiSp'), 'i')
// End of tests */
