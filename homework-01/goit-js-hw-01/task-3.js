const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const password = prompt( "Password:" );
if ( password === null ){
    message = "Canceled by user.";
    console.log( message );
} else if ( password === ADMIN_PASSWORD ){
    message = 'Welcome!';
    console.log( message );
} else {
    message = 'Access denined!';
    alert( message );
}
