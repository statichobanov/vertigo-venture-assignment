/*
Напивете две функции който изчисляват факториел n! = 1*2*3*4*…..*n. Едната чрез рекурсия, другата чрез итерация.
*/

function iterationFactorial(n) {
    let result = n;

    if (n < 0) {
        return 'please enter number greater or equal to 0';
    }

    if (n <= 1) {
        return 1;
    }

    while(n > 1) {
        n--;
        result *= n;
    }

    return result;
}

function recursiveFactorial(n) {
    if (n < 0) {
        return 'please enter number greater or equal to 0';
    }
    
    if (n <= 1) {
        return 1;
    }

    let result = n;
    
    return result *= recursiveFactorial(n - 1);
}
