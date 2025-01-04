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
    return total = total + amount; // Modifies the external variable 'total', making it impure.
}

console.log(addToTotal(5)); // 7
console.log(addToTotal(5)); // 12
