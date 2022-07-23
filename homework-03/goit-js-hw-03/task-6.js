const products = [
    { name: 'Радар' , price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроїд' , price: 400 , quantity: 7 },
    { name: 'Захоплення', price: 1200, quantity: 2 },
  ];
  
  const calculateTotalPrice = function (allProducts, productName) {
    // Check if input args are true.
    if (Array.isArray(allProducts) && typeof productName === 'string') {
        for (const obj of allProducts) {
            if (obj.name === productName) {
                return obj.price * obj.quantity;
            }
        }
    }
    console.warn('calculateTotalPrice : Incorrect args passed!');
  };
  
  /*
   * Викличи функції для перевірки працездатності твоєї реалізації.
   */
  console.log(calculateTotalPrice(products, 'Радар')); // 5200
  console.log(calculateTotalPrice(products, 'Дроїд')); // 2800