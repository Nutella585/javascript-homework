let countryIsFound = false;
const COUNTRIES = [{
        name : "china",
        credits : 100
    }, {
        name : "chile",
        credits : 250
    }, {
        name : "australia",
        credits : 170
    }, {
        name : "india",
        credits : 80
    }, {
        name : "jamajka",
        credits : 120
    }
];

do {
    const inputedCountry = prompt("Type your country\`s name in here:").toLowerCase();
    for (const country of COUNTRIES) {
        if (inputedCountry === country.name){
            const properNameOfCountry = inputedCountry[0].toUpperCase() + inputedCountry.substring(1);
            alert(`Доставка в ${properNameOfCountry} буде коштувати ${country.credits} кредитів`);
            countryIsNotFound = true;
            break;
        }
    }
} while (!countryIsNotFound)
alert ("У вашій країні доставка недоступна.");