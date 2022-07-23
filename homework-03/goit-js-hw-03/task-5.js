const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроїд', price: 400, quantity: 7 },
    { name: 'Захоплення', price: 1200, quantity: 2 },
  ];
  
  /**
   * @param {Array<object>} arr 
   * @param {string} prop 
   */
  const getAllPropValues = function (arr, prop) {
    if (Array.isArray(arr) && typeof prop === 'string') {
        let arrWithProps = [];
        for (const obj of arr) {
            if (obj[prop]) {
                arrWithProps.push(obj[prop]);
            }
        }
        return arrWithProps;
    }
    console.warn('getAllPropValues : Invalid args passed.');
  };
  
  /*
   * Викличи функції для перевірки працездатності твоєї реалізації.
   */
  console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроїд', 'Захоплення']
  
  console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]
  
  console.log(getAllPropValues(products, 'category')); // []