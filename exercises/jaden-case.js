'use strict'

/*
 * Jaden Smith Case
 *
 * Make a function `jadenCase` that takes a String
 * and return capitalize each words: "How are you ?" -> "How Are You ?"
 *
 */

const capitalize = str => {

  let str2 = str.split('')
  const strFirst = str2.shift().toUpperCase()
  const str3 = strFirst + str2.join('').toLowerCase()
  return (str3)

}

const jadenCase = str => {

  let str2 = str.split(' ')
  let i = 0

  while (str2[i] != str2[str2.length]) {
    str2[i] = capitalize(str2[i])
    i++
  }

  return str2.join(' ')
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof jadenCase, "function")
assert.strictEqual(jadenCase('coucou ca va'), 'Coucou Ca Va')
assert.strictEqual(jadenCase('test numEro 2 eT trois'), 'Test Numero 2 Et Trois')
assert.strictEqual(jadenCase('STR STR'), 'Str Str')
assert.strictEqual(jadenCase('zap ZAP'), 'Zap Zap')
// End of tests */
