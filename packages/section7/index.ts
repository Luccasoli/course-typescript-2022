// Generics, constraints with "extends" and keyof
function extractValueByKey<T, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}
console.log(extractValueByKey({ name: "Lucas", age: 24 }, "age"));
