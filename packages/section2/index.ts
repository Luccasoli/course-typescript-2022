// function add(number1: number, number2: number) {
//   return number1 + number2;
// }

// enum Role {ADMIN = 'ADMIN', BASIC_USER = 'BASIC_USER' }

// type Person = {
//   name: string;
//   age: number;
//   role: Role
// }

// const person = {
//   name: "lucas",
//   age: 24,
//   role: Role.ADMIN
// } as Person;

type NumberOrSting = number | string;

function combine(value1: NumberOrSting, value2: NumberOrSting): unknown {
  let result: unknown;

  if (typeof value1 === "number" && typeof value2 === "number")
    result = value1 + value2;
  else result = value1.toString() + value2.toString();

  return result;
}

console.log(combine("Meu", "Nome"));
console.log(combine(1, 2));
