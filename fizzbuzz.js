/*
Напишете функция с един параметър, число N, която връща в масив всички числа от 1 до N, като заменя всяко число делимо на 3 с думата „Fizz”,
а всяко число делимо на 5 с думата „Buzz”. Ако числото се дели и на 3 и на 5 трабва да се замени с “FizzBuzz”.
Примерен вход: fizzbuzz(20);
Очакван резултат: [ 1,  2, "Fizz",  4, "Buzz",  "Fizz",  7,  8,  "Fizz",  "Buzz",  11,  "Fizz",  13,  14,  "FizzBuzz",  16,  17,  "Fizz",  19,  "Buzz" ]
*/
function fizzbuzz(n) {
    const arr = [];

    for (let i = 1; i <= n; i++) {
        let element = i;

        if (i % 3 === 0 && i % 5 === 0) {
            element = 'FizzBuzz';
        } 
        if(!isNaN(element)) {
            element = i % 3 === 0 ? 'Fizz' : i;
        }
        if(!isNaN(element)) {
            element = i % 5 === 0 ? 'Buzz' : i;
        }
    
        arr.push(element);
    }

    return arr;
}
