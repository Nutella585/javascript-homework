const numbers = [];
let total = 0;
let input;

while (input) {
    input = prompt ("Enter a number");
    numbers.push(parseFloat(input));
}

//  if it is an array     if an array is not empty
//  ---------------------     ---------------
if (Array.isArray(numbers) && !numbers.length) {
    for (const num of numbers) {
        total += num
    }
    console.log(`Загальна сума чисел дорівнює ${total}.`);
}   else {
    console.log('Загальна сума чисел дорівнює 0.');
}