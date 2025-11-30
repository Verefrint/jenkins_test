// app.test.js
const assert = require('assert');
const { sum } = require('./app');

assert.strictEqual(sum(1, 2), 3);
console.log('All tests passed!');