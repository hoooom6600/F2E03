// type 語法
// type Person = {
//   name: string;
//   age: number;
//   magic?: boolean;
//   status?: "a" | "b" | "c";
// };

// interface 語法
interface Person {
  name: string;
  age: number;
  magic?: boolean;
  status?: "a" | "b" | "c";
}

const hero: Person = {
  name: "cc",
  age: 20,
  status: "b",
};

const mage: Person = {
  name: "dd",
  age: 25,
  magic: true,
};

console.log(hero, mage);
