/*
 * Типів транзацкій всього два.
 * Можна покласти або зняти гроші з рахунку.
 */
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
  };
  
  /*
   * Кожна транзакція - це об'єкт з властивостями: id, type і amount
   */
  
  const account = {
    // Поточний баланс рахунку
    balance: 0,
  
    // Історія транзакцій
    transactions: [],
  
    /*
     * Метод створює і повертає об'єкт транзакції.
     * Приймає суму і тип транзакції.
     */
    createTransaction(amount, type) {
        const newTransaction = {};
        newTransaction.id = this.transactions.length; 
        newTransaction.amount = amount;
        newTransaction.type = type;
        return newTransaction;
    },
  
    /*
     * Метод відповідає за додавання суми до балансу.
     * Приймає суму танзакції.
     * Викликає createTransaction для створення об'єкта транзакції
     * після чого додає його в історію транзакцій
     */
    deposit(amount) {
      this.transactions.push(
        createTransaction(amount, Transaction.DEPOSIT)
      );
      this.balance += amount;
    },
  
    /*
     * Метод відповідає за зняття суми з балансу.
     * Приймає суму танзакції.
     * Викликає createTransaction для створення об'єкта транзакції
     * після чого додає його в історію транзакцій.
     *
     * Якщо amount більше, ніж поточний баланс, виводь повідомлення
     * про те, що зняття такої суми не можливо, недостатньо коштів.
     */
    withdraw(amount) {
      this.transactions.push(
        createTransaction(amount, Transaction.WITHDRAW)
      );
      return amount > this.balance ? this.balance -= amount : console.warn("Not enough money.");
    },
  
    /*
     * Метод повертає поточний баланс
     */
    getBalance() {
      return this.balance;
    },
  
    /*
     * Метод шукає і повертає об'єкт транзакції по id
     */
    getTransactionDetails(id) {
      return this.transactions[id + 1];
    },
  
    /*
     * Метод повертає кількість коштів
     * певного типу транзакції з усієї історії транзакцій
     */
    getTransactionTotal(type) {
      let totalSum = 0;
      const filteredObjs = this.transactions.find(obj => obj.type === type);
      for (const obj of filteredObjs) {
        totalSum += obj.amount;
      }
    },
  };