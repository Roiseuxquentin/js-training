'use strict'

/*
 * Create a function `yell` that takes a string
 * and return the same string but all in upper case
 *
 */

const yell = (str) => {
	const STR = str.toUpperCase()
	return STR

}
//* Begin of tests
const assert = require('assert')


assert.strictEqual(typeof yell, 'function')
assert.strictEqual(yell('bonjour'), 'BONJOUR')
assert.strictEqual(yell('whiSp'), 'WHISP')

// End of tests */
