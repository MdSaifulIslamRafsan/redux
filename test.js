// Pure Function: A function is considered pure if it always produces the same output for the same inputs
// and has no side effects (does not modify any state outside the function or interact with external variables).
const sum = (a, b) => a + b;

console.log(sum(5, 6)); // 11
console.log(sum(5, 6)); // 11
console.log(sum(5, 6)); // 11

// Impure Function: A function is considered impure if it relies on external state
// or modifies external variables, leading to potential side effects.
let total = 2;

const addToTotal = (amount) => {
  return (total = total + amount); // Modifies the external variable 'total', making it impure.
};

console.log(addToTotal(5)); // 7
console.log(addToTotal(5)); // 12

const updateDate = () => {
  return new Date(); // Returns a new Date object, which is an impure function.
};

// mutation
import {produce} from "immer"
const employee = {
  name: "John Doe",
  age: 30,
  salary: 50000,
  address : {country : "United States", city : "new York"}
};

const employee2 = { ...employee, name: "Md Saiful Islam" , address : {...employee.address , country : "Bangladesh", city : "Dhaka" } };

console.log(employee);
console.log(employee2);

const employee3 =  produce(employee, draft => {
    draft.name = "Employ"
})
console.log(employee3);
