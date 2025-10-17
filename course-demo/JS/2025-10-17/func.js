function hello(name) {
  console.log(`hello, ${name}`);
}

hello("cat");

// 故意多給引數
hello("cat", "dog");
// 故意少給引數
hello();

// ...寫法

function hello2(name, ...s) {
  console.log(`hello, ${name}`);
  console.log(name);
}

hello2("cat", "dog", "fish", "pig");

// 預設參數

function hello3(name = "John") {
  console.log(`hello, ${name}`);
}

hello3();
hello3("Jane");
