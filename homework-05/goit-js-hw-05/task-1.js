const Account = function ( args ) {
    this.login = args.login;
    this.email = args.email;
}

Account.prototype.getInfo = function () {
    return console.log( `Login: ${ this.login }, Email: ${ this.email }` );
}

console.log( Account.prototype.getInfo );

const mango = new Account( {
    login: 'Mangozedog',
    email: 'mango@dog.woof',
} );

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account( {
    login: 'Poly',
    email: 'poly@mail.com',
} );

poly.getInfo(); // Login: Poly, Email: poly@mail.com

