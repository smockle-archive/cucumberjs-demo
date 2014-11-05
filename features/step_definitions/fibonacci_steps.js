var fibonacci_steps = function () {
  this.Given('I want to find a value in the Fibonacci sequence', function(callback) {
    callback.pending();
  });

  this.When('I specify n=$n', function(n, callback) {
    callback.pending();
  });

  this.Then('the calculator should return $output', function(output, callback) {
    callback.pending();
  });
};

module.exports = fibonacci_steps;
