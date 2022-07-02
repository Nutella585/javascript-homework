let total = 0;

do {
    let input = prompt("Enter the number:");
    if (input === null) {
        break;
    }
    total += parseFloat(input);
} while (true);

alert(`Загальна сума чисел дорівнює ${total}.`);