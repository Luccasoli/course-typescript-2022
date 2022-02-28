// number type

function add(number1: number, number2: number) {
  return number1 + number2;
}

// enum type
enum Role {
  ADMIN = "ADMIN",
  BASIC_USER = "BASIC_USER",
}

// object and alias type
type Person = {
  name: string;
  age: number;
  role: Role;
};

const person = {
  name: "lucas",
  age: 24,
  role: Role.ADMIN,
} as Person;

// alias type and Union
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

// Function type
function callback(fn: () => void) {
  fn();
}

callback(() => {
  console.log("running callback...");
  return true;
});

// The "unknown" type
const userInput: unknown = "1";
if (typeof userInput === "number") {
  const userInputNumber: number = userInput;
  console.log("Test unknown type: ", userInputNumber);
}

// The "never" type
function generateError(message?: string): never {
  throw new Error(message || "Generic error");
}
generateError();
