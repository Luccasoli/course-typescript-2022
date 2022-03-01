type NumberAndString = string | number;
type BooleanAndString = boolean | string;

// get common types
type Combination = NumberAndString & BooleanAndString;

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  role: string;
};

// get combination of attributes
type AdvancedEmployee = Employee & Admin;
