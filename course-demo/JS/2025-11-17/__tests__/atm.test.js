// # 存錢功能
// - 可以存錢
// - 不可以存 0 元或是小於 0 元的金額（越存錢越少！）

// # 領錢功能
// - 可以領錢
// - 不能領 0 元或是小於 0 元的金額（越領錢越多！）
// - 不能領超過本身餘額
import { ATM } from "../src/atm";

describe("存錢功能", () => {
  it("can desopit", () => {
    // 建立ATM
    const atm = new ATM(5);
    // 存錢
    atm.deposit(10);
    // 看餘額
    expect(atm.balance()).toBe(15);
  });

  it("cannot be 0 or negative", () => {
    // 3A
    const atm = new ATM(10);
    // 不可為 0
    expect(() => {
      atm.deposit(0);
    }).toThrow("金額不得為 0");
    // 不可為負值
    expect(() => {
      atm.deposit(-1);
    }).toThrow("金額不得為負值");
  });
});

describe("領錢功能", () => {
  it("can withdraw", () => {
    // 3A
    const atm = new ATM(10);
    // 領錢
    const amount = atm.withdraw(2);
    // 看餘額
    expect(amount).toBe(2);
    expect(atm.balance()).toBe(8);
  });
  it("cannot be 0 or nagative", () => {
    // 3A
    const atm = new ATM(50);
    // 不可為 0
    expect(() => {
      atm.withdraw(0);
    }).toThrow("金額不得為 0");
    // 不可為負值
    expect(() => {
      atm.withdraw(-15);
    }).toThrow("金額不得為負值");
  });
  it("cannot be more than saving", () => {
    // 3A
    const atm = new ATM(100);
    expect(() => {
      atm.withdraw(1000);
    }).toThrow("餘額不足");
  });
});
