/*
3.	Имате два сортирани масива от цели числа. Напишете функция която слива двата масива в нов сортиран масив. 
Не използвайте вградените функции за сортиране!
Примерен вход: merge([  1,  3,  5], [  2,  4,  5,  6,  8]);
Очакван резултат: [  1,  2,  3,  4,  5,  5,  6,  8 ]
*/
function merge(firstArr, secondArr) {
    var arr = [...firstArr, ...secondArr];
    
    return sort(arr);
}

function sort(arr) {
    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr.length - i - 1; j++) {
            let current = arr[j];
            let next = arr[j + 1];

            if (next < current) {
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
            }
        }
    }
    return arr;
}
