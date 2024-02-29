function fizzBuzz(i) {
    if (i % 3 === 0 && i % 5 === 0) {
        return 'fizzBuzz';
    }else if(i % 3 === 0){
        return 'Fizz';
    }else if (i % 5 === 0) {
        return 'Buzz';
    }else 
        return i;
}

console.log(fizzBuzz(6)); // "fizz"
console.log(fizzBuzz(20)); // "buzz"
console.log(fizzBuzz(30)); // "fizzbuzz"
console.log(fizzBuzz(8)); // 8