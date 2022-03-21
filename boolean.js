//5 falsy files = 0, NaN, Null, undefined, '';


console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(''));

const money = 0;

if (money) {
    console.log("Don't spend all your money~ hint from a Billionaire.");
} else {
    console.log("No money at all because you've spent all your money! =/");
}