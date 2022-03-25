
console.log("-----THIS IS THE WHILE LOOP --------");
let rep = 1;
while(rep <= 10) {
    console.log(`Lifting weights repetition ${rep}`);
    rep++;

}


let dice = Math.trunc((Math.random() * 7)); 
while(dice !== 7) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc((Math.random() * 7)) + 1;
    if(dice === 7) console.log(`Loop is about to end----`);
}