//test array data [17, 21, 23]
//given an array of forecasted maximum temperatures,
//the thermometer will display a string with pattern "...17C in 1 day, 21 in 2 days, 23 in 3 days"
//create a function printForecast which takes an array and logs a string like the above to the console. 



//1 - Take the array of forecasted maximum temperatures 
//2 - Each index of the array will be printed according to their respective temperatures
//3 - the number of days will be the index value 
//4 - create the function that will return the string fully complete. 

const maxTemperatures = [17, 21, 23];
const maxTemps2 = [12, 5, -5, 8, 4];

const printForecast = function (arr){
    //create a for loop to print the forecast
    let day = 1;
    //creating an array to store each value
    const seqTemp = [];
    //creating a variable to store the complete string
    let finalString;
    for(i = 0; i < arr.length; i++){
        //seqTemp is storing each value and index as days in each position of the array
        seqTemp.push(`${arr[i]}C in ${day}${i > 0 ? ' days' : ' day'}`);
        //joining all the indexes together with a comma as a full string 
        finalString = seqTemp.join(', ');
        day += 1;
    }
     return finalString;
}

console.log(printForecast(maxTemperatures));
console.log(printForecast(maxTemps2));