function isPrime(number) {
    if(number<=1) return false;
    for(let  i=2;i<number/2;i++){

       if(number%i===0){
           return false;
       }
    }

    return true;
 }
   const number = 10;
 if (isPrime(number)) {
   console.log(`${number} is a prime number.`);
 } else {
   console.log(`${number} is not a prime number.`);
 }



 
   function fibonacciSum(n) {
   if (n <= 0) return 0;
     let prev = 0;
   let curr = 1;
   let sum = 1;
     for (let i = 2; i <= n; i++) {
     const next = prev + curr;
     sum += next;
     prev = curr;
     curr= next;
   }
     return sum;
 }

const num = 10; 
console.log(`The sum of the Fibonacci series up to ${num} is: ${fibonacciSum(num)}`);



function countEvenOddZero(arr) {
 let even = 0;
 let odd = 0;
 let zero = 0;

 for (let i = 0; i < arr.length; i++) {
   if (arr[i] === 0) {
     zero++;
   } else if (arr[i] % 2 === 0) {
     even++;
   } else {
     odd++;
   }
 }

 return { even, odd, zero };
}
const numbers = [1, 2, 3, 4, 5, 6, 0, 7, 8, 9, 0];
const result = countEvenOddZero(numbers);
console.log(result);