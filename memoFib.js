// this is an example of dynamic programming it has memoization w memo array
// comes from (Crockford: 2008)Javascript the Good Parts, (Oreilly), pp. 44-45.

var fibonacci = (function (){
  var memo = [0, 1];
  // return values from function call stored in memo array.
  // result is stored in memo and then referenced
  // purpose is to keep the func calls from fibonacci ing and weighing down cpu
  var fib = function (n) {
    var result = memo[n];
    if (typeof result !== 'number') {
      result = fib(n -1) + fib(n - 2);
      memo[n] = result;
    }
    return result;
  }
  return fib;
}());

console.log('fibonacci of 13 => ', fibonacci(13));
