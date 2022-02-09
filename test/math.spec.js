const assert = require('assert')
const Math = require('./src/math')

describe('Math Class', function() {
    it('Sum two numbers', function(){
       const math = new Math();
       assert.deepEqual(math.sum(5,5), 10)
    })
})