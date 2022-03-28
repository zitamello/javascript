const measureKelvin = function(){
    const measurement = {
        type: 'Temperature',
        unit: 'Celcius',
        //Fix the string returned to number;
        value: Number(prompt('Degrees Celcius: ')),
    };

   // console.log(measurement);
   debugger
    console.table(measurement);
    const kelvin = measurement.value + 273;
    return kelvin;
}
//A identify the bug; 
console.log(measureKelvin())