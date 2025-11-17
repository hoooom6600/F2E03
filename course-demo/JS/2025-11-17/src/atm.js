class ATM {
  constructor(initialValue) {
    this.saving = initialValue;
  }
  deposit(amount) {
    if (amount == 0) {
      throw "金額不得為 0";
    }
    if (amount < 0) {
      throw "金額不得為負值";
    }
    this.saving += amount;
  }
  withdraw(amount) {
    if (amount == 0) {
      throw "金額不得為 0";
    }
    if (amount < 0) {
      throw "金額不得為負值";
    }
    if (amount > this.saving) {
      throw "餘額不足";
    }
    this.saving -= amount;
    return amount;
  }
  balance() {
    return this.saving;
  }
}

export { ATM };
