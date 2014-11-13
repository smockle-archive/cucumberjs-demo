var exports = module.exports = {};
var value;

exports.value = value;

exports.get = function(n) {
  if (n === undefined || !n.match(/^[0-9]{1,3}$/)) {
    exports.value = "ERROR: n must be an integer between 0 and 999.\n";
    return;
  }

  exports.value = calc("", "", parseInt(n, 10));
};

function calc (i, j, n) {
  if (i === "") {
    i = 1;
    j = 0;
  }

  if (n <= 0) {
    return 0;
  }

  if (n == 1) {
    return i;
  }

	calc(i + j, i, n - 1);
}
