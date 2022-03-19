let markHeight = 1.79;
let markWeight = 87;

let johnHeight = 1.95;
let johnWeight = 92;

markHeight = 1.88;
markWeight = 95;

johnHeight = 1.76;
johnWeight = 85;

const johnBMI = johnWeight / (johnHeight * johnHeight);
const markBMI = markWeight / (markHeight ** 2);

const markHigherThanJohn = markBMI > johnBMI;

console.log(johnBMI, markBMI);
console.log(markHigherThanJohn);