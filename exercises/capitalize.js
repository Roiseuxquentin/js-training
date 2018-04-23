'use strict'

/*
 * Create a function `capitalize` takes a string
 * and transform to upper case only the first letter
 *
 */

const capitalize = str => {

	let str2 = str.split('')
	const strFirst = str2.shift().toUpperCase()
	const str3 = strFirst + str2.join('').toLowerCase()
	return (str3)

}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof capitalize, "function")
assert.strictEqual(capitalize('str'), 'Str')
assert.strictEqual(capitalize('qsdqsdqsd'), 'Qsdqsdqsd')
assert.strictEqual(capitalize('STR'), 'Str')
assert.strictEqual(capitalize('zapZAP'), 'Zapzap')
// End of tests */
