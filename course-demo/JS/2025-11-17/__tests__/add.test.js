function add(n, m) {
  return n + m;
}

test("測試 add", () => {
  expect(add(1, 2)).toBe(3);
});

test("測試 add", () => {
  expect(add(2, 2)).toBe(4);
});
