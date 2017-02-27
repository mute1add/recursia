var n = Number(prompt('Please enter the sequence number of Fibonacci numbers'));

function fib(n){
    if (n === 1) {
        return 1;
    } 
    else if (n === 2){
        return  1;
    }
    else {
     return fib(n-1) + fib(n-2);
  
  }
}

document.write(fib(n));