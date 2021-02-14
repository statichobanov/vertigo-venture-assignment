/*
2.	Имате число от 0 до 999999 включително. Напишете функция която превръща числото в еквивалентният му текст на
Английски език. Думата „and” не се използва. Всички думи сa с първа главна буква.
Примерен вход: numberToText(101081);
Очакван резултат: "One Hundred One Thousand Eighty One"
*/

const ONE_TO_NINETEEN = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten',
    'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'
];
const TENS = ['Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

function numberToText(number) {
    if (number > 999999 || number < 0) {
        return 'please enter number between 0 - 999999';
    } else if (isNaN(number)) {
        return 'please enter a number';
    } else if(number === 0) {
        return 'Zero'
    }
    
    const result = splitToChunks(number).map(convertToWords).reverse();

    if (result.length > 1) {
        return result.join(' Thousand ');
    }

    return result.join(' ');
}

function convertToWords(number) {
    const words = [];
    let hundreds;

    if (number < 20) {
        return ONE_TO_NINETEEN[number - 1];
    }

    if(number < 100) {
        let units = number % 10;
        let tens = Math.floor(number / 10);
    
        words.push(TENS[tens - 2]);
        // skip if zero;
        if (units) {
            words.push(ONE_TO_NINETEEN[units - 1]);
        }
    
        return words.join(" ");
    }

    // Getting the hundreds of the number
    hundreds = Math.floor(number / 100);
    words.push(ONE_TO_NINETEEN[hundreds - 1] + " Hundred");
    words.push(convertToWords(number % 100));
  
    return words.join(" ");
}

function splitToChunks(number) {
    var chunks = [];

    while(number > 0) {
        chunks.push(number % 1000); // Getting the thousand of the number
        number = Math.floor(number / 1000); // Removing the part
    }
  
    return chunks;
}
