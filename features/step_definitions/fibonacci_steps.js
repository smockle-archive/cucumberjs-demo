var assert = require('cucumber-assert');

var fib;

var fibonacci_steps = function () {
  this.Given('I want to find a value in the Fibonacci sequence', function(callback) {
    fib = require('../../src/fibonacci_calculator');
    callback();
  });

  this.When('I specify n=$n', function(n, callback) {
    fib.get(n);
    callback();
  });

  this.Then('the calculator should return $output', function(output, callback) {
    assert.equal(fib.value, parseInt(output, 10), callback);
  });
};

module.exports = fibonacci_steps;
