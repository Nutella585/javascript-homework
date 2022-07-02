function checkOrdered(total, ordered) {
    if (ordered > total){
        console.log("На складі недостатньо товарів!");
    } else if (ordered === 0 && total === 0){
        console.log("Неправильно введено  дані!");  
    } else {
        console.log("Замовлення оформлено, з вами зв'яжеться менеджер");
    }
}

checkOrdered(100, 10);  // Nominal Case
checkOrdered(100, 100); // Boundary Case
checkOrdered(50, 100);  // Negative Case
checkOrdered(0, 0);     // Zero Case