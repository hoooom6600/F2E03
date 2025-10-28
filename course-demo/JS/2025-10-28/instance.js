class BossCreator {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  skill() {
    console.log("NORMAL ATTACK");
  }
}

const boss1 = new BossCreator("The One", "secret");

console.log(boss1);
console.log(boss1.skill());
