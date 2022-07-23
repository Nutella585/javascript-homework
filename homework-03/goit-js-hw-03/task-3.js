const findBestEmployee = function (employees) {
    if (typeof employees === 'object') {

        let bestEmployeeScore = 0;
        let bestEmployeeName  = '';

        for (const employee in employees) {
            if (employees[employee] > bestEmployeeScore) {
                bestEmployeeScore = employees[employee];
                bestEmployeeName  = employee;
            }
        }

        return `${bestEmployeeName} : ${bestEmployeeScore}`;
    };
    console.warn("findBestEmployee : Passed arg is not an object!");
};
  
  /*
   * Викличи функції для перевірки працездатності твоєї реалізації.
   */
  console.log(
    findBestEmployee({
      ann: 29,
      david: 35,
      helen: 1,
      lorence: 99,
    }),
  ); // lorence
  
  console.log(
    findBestEmployee({
      poly: 12,
      mango: 17,
      ajax: 4,
    }),
  ); // mango
  
  console.log(
    findBestEmployee({
      lux: 147,
      david: 21,
      kiwi: 19,
      chelsy: 38,
    }),
  ); // lux