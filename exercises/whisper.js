'use strict'

/*
 * Create a function `whisper` that takes a string
 * and return the same string but all in lower case
 *
 */
const whisper = (str) => {

	const jok = str.toLowerCase()
	return jok
}

 whisper('BONJOUR')
//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof whisper, 'function')
assert.strictEqual(whisper('bonJour'), 'bonjour')
assert.strictEqual(whisper('BONJOUR'), 'bonjour')

// End of tests */
