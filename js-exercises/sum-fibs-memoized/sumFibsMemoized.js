function sumFibs(num) {
    var sum = 0;
    var fib = 0;
  
    while (sum <= num) {
      var currentFib = fibo(fib);
      if (currentFib %2 === 1) {
        sum += currentFib;
      }
      fib++;
    }
    return sum; 
}


function fibo(n) {
  if (n <= 1) return 1;
  return fibo(n - 1) + fibo(n - 2);
}

function cacheFunction() {}

export { sumFibs, cacheFunction };
