const pricePerDroid = 3000;
let credits = 23580;
let totalPrice;

const countOfDroids = prompt("How many droids would you like to buy?", 2);
if (countOfDroids === null){
    console.log("Canceled by the user.");
} else {
    totalPrice = pricePerDroid * countOfDroids;
    if (totalPrice > credits) {
        console.log("Cancel by the user.");
    } else {
        credits -= totalPrice;
        alert(`Ви купили ${countOfDroids} дроїдів, на рахунку залишилося ${credits} кредитів.`);
    }
}