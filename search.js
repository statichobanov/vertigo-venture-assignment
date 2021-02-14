/*	Ако ви е даден сортиран масив от цели числа, “А” и цяло чиско “n” , напишете функция която да връща 
позицията, на която числото се намира в масива или позицията на която числото трява да се добави в масива,
 така че след операцията масива да остане сортиран. Например за масив 
[ 1, 3, 5, 16 ] и число 3, функцията трабва да върне 1, за 10 трабва да върне 3, а за 18 трабва да върне 4.
Примерен вход: search([  1,  3,  5,  16 ], -1);
Очакван резултат: 0
*/
function search (array, n) {
    let result;

    for (let index = 0; index < array.length - 1; index++) {
        let current = array[index];
        let next = array[index + 1];

        if (n <= current) {
            result = index;
            break;
        } else if (n <= next) {
            result = index + 1;
            break;
        }

        result = array.length;
   }

    return result;
}
