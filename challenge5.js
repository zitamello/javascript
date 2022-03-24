//using objects and object methods, calculate john and mike's BMI 
//remember BMI = Mass / (height * height)
//mark weidths 78, and is 1.69 tall 
//john weights 92, and is 1.95 tall 

const mark = {
    firstName: 'Mark', 
    lastName: 'Miller',
    mass: 78, 
    height: 1.69, 

    calculateBMI: function(){
        this.BMI = this.mass / (this.height ** 2);
        mark['BMI'] = this.BMI;
        return Math.round(this.BMI);
    }

}

const john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 95,
    height: 1.95,

    calculateBMI: function() {
        this.BMI = this.mass / (this.height ** 2);
        john['BMI'] = this.BMI;
        return Math.round(this.BMI);
    }
}

const highestBMI = function(markBMI, johnBMI){
    const highestBMI = `${markBMI > johnBMI ? markBMI : johnBMI}`;
    const highestName = `${markBMI > johnBMI ? mark.firstName : john.firstName}`;
    return `${highestName}'s BMI (${highestBMI})`;
}

const lowestBMI = function(markBMI, johnBMI) {
    const lowestName = `${markBMI < johnBMI ? mark.firstName : john.firstName}`;
    const lowestBMI = `${markBMI < johnBMI ? markBMI : johnBMI}`;
    return `${lowestName}'s (${lowestBMI})`;
}

const markBMI = mark.calculateBMI();
const johnBMI = john.calculateBMI();

console.log(`${highestBMI(markBMI, johnBMI)}` + " is higher than " + `${lowestBMI(markBMI, johnBMI)}.`);
