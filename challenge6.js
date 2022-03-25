/*
1- create an array of bills with a least 10 values; 
2 - create empty arrays for tips and totals 
3 - use the calctip function to calculate tips and total values for every bill in the bills array 

*/

const bills = [22, 295, 176, 440, 37, 105, 10, 100, 86, 1000];
const tips = [];
const totals = [];

const calculateTip = function(bill){
    if (bill >= 50 && bill <= 300){
        const tip = 0.15 * bill;
        return tip;
    }else {
        const tip = 0.20 * bill;
        return tip; 
    }
}

for (i = 0; i < bills.length; i++) {
    tips[i] = calculateTip(bills[i]);
    totals.push(tips[i] + bills[i]);
}
console.log(tips, totals);

const calculateAverage = function(arr){
    let sum = 0;
    for(i = 0; i < arr.length; i++) {
        //sum starts at 0 and is added to the array element and then re-stored to sum variable. With this we have
        //all the elements in the array added together; 
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(calculateAverage([2, 3, 7]));
console.log(calculateAverage(bills));
console.log(calculateAverage(totals));
