function aa() {
  console.log("AA");
}
function xyz() {}
const name = "world";
function abc() {}
// named export
export { aa, xyz, name };

// default export
export default abc;
