class Car {
    /*
     * Додай статичний метод `getSpecs(car)`,
     * який приймає об'єкт-машину як параметр і виводить
     * в консоль значення властивостей maxSpeed, speed, isOn, distance и price.
     */
    static getSpecs ( car ) {
        return car;
    }

    /*
     * Конструктор отримує об'єкт налаштувань.
     *
     * Додай властивості майбутнього екземпляра класу:
     *  speed - поточна швидкість, початкова 0
     *  price - ціна автомобіля
     *  maxSpeed - максимальна швидкість
     *  isOn - заведений автомобіль, значення true або false. Спочатку false
     *  distance - загальний кілометраж, спочатку 0
     */
    constructor ( args ) {
        this.speed = ( args.speed ) ? args.speed : 0;
        this.price = ( args.price ) ? args.price : 0;
        this.maxSpeed = ( args.maxSpeed ) ? args.maxSpeed : 0;
        this.isOn = ( args.isOn ) ? args.isOn : false;
        this.distance = ( args.distance ) ? args.distance : 0;
    }

    /*
     * Додай геттер і сеттер для властивості price,
     * який буде працювати з властивістю ціни автомобіля.
     */
    get getPrice () {
        return this.price;
    }
    /*
     * Додай код для того, щоб завести автомобіль
     * Записує у властивість isOn значення true
     */
    turnOn () {
        this.isOn = ( this.isOn ) ? "This car is already on." : true;
    }

    /*
     * Додай код для того, щоб заглушити автомобіль
     * Записує у властивість isOn значення false,
     * і скидає поточну швидкість в 0
     */
    turnOff () {
        this.isOn = ( this.isOn ) ? false : "This car is already off.";
    }

    /*
     * Додає до властивості speed отримане значення,
     * за умови, що результуюча швидкість
     * не більше, ніж значення властивості maxSpeed
     */
    accelerate ( value ) {
        if ( ( this.speed + value ) < this.maxSpeed ) {
            this.speed += value;
            return;
        }
        console.warn( 'accelerate(): Speed can not be bigger than max speed.' )
    }

    /*
     * Забирає від властивості speed отримане значення,
     * за умови, що результуюча швидкість не менше нуля
     */
    decelerate ( value ) {
        if ( ( this.speed - value ) >= 0 ) {
            this.speed -= value
            return;
        }
        console.warn( 'accelerate(): Speed is less or equal ZERO.' )
    }

    /*
     * Додає в поле distance кілометраж (hours * speed),
     * але тільки в тому випадку, якщо машина заведена!
     */
    drive ( hours ) {
        if ( this.isOn ) {
            this.distance += hours * this.speed;
            return;
        }
        console.warn( 'drive(): The car is OFF.' )
    }
}

const mustang = new Car( { maxSpeed: 200, price: 2000 } );

mustang.turnOn();
mustang.accelerate( 50 );
mustang.drive( 2 );

Car.getSpecs( mustang );
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate( 20 );
mustang.drive( 1 );
mustang.turnOff();

Car.getSpecs( mustang );
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log( mustang.price ); // 2000
mustang.price = 4000;
console.log( mustang.price ); // 4000