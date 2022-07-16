const checkForSpam = function ( message ) {

    const stopWords = ['spam', 'sale'];
    const string = message.toLowerCase();

    for (const word of stopWords) {
        if (string.includes(word)) {
            return true;
        }
    }

    return false;
};

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log( checkForSpam( 'Latest technology news' ) ); // false

console.log( checkForSpam( 'JavaScript weekly newsletter' ) ); // false

console.log( checkForSpam( 'Get best sale offers now!' ) ); // true

console.log( checkForSpam( '[SPAM] How to earn fast money?' ) ); // true