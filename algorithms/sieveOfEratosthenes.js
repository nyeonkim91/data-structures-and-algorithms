// OPTIMIZATION: Stop looping through at the square root of N (num)
// 참고 - https://blog.naver.com/whdgkks12347/221339971221

// return all prime numbers up to 'num' in an array
function sieveOfEratosthenes(num) {
  let primes = [];

  if(num < 2) return primes;
  else {
    primes[0] = false;
    primes[1] = false;

    for(let i = 2; i <= num; i++) {
      primes[i] = true;
    }

    for(let i = 2; i <= Math.sqrt(num); i++) {
      for(let j = i * 2; j <= num; j += i) {
        primes[j] = false;
      }
    }
    // other way
    // for(let i = 2; i <= Math.sqrt(num); i++) {
    //   for(let j = 2; i * j <= num; j++) {
    //     primes[i * j] = false;
    //   }
    // }

    let res = [];
    for(let i = 2; i < primes.length; i++) {
      if(primes[i]) res.push(i)
    }
    return res;
  }
}

sieveOfEratosthenes(19); // should return [2, 3, 5, 7, 11, 13, 17, 19]
