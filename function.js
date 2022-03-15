person = 'Maria';

function greetings(person) {
  return `Hello ${person}`;
}

const functionVariable = greetings(person);
console.log(functionVariable);

function mathSum(number1, number2){
  sum = number1 + number2;
  return sum;
}

const result = mathSum(3, 7);

console.log(`The sum of your numbers is ${result}`);


//anonymus function
const raiz = function(n) {
    root = Math.sqrt(n);
    return root;
};

console.log(raiz(5));


//arrow function * the spaceship operator

const roundNums = (n) => {
  nums = Math.round(n);
  return nums;
};

//same function from before
const roundNums2 = (x) => nums2 = Math.round(x);

console.log(roundNums(35.23235));
console.log(roundNums2(12.323424));
