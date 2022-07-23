const countTotalSalary = function (employees) {
    if (employees === Object(employees)) {
        let totalSum = 0;
        for (const name in employees) {
            totalSum += employees[name];
        }
        return totalSum;
    }
    console.warn("countTotalSalary : Passed value is not a function!")
  };
  
  /*
   * Викличи функції для перевірки працездатності твоєї реалізації.
   */
  console.log(countTotalSalary({})); // 0
  
  console.log(
    countTotalSalary({
      mango: 100,
      poly: 150,
      alfred: 80,
    }),
  ); // 330
  
  console.log(
    countTotalSalary({
      kiwi: 200,
      lux: 50,
      chelsy: 150,
    }),
  ); // 400