const a = (b) => {
  let c = 0;
  return b(c);
};

const b = (c) => {
  c++;
  return c;
};

console.log(a(b));
console.log(b());
