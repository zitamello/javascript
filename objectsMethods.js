//any function attached to an object is a method; 

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedman',
    birthYear: 1990,
    job: 'teacher',
    friends: ['Michael', 'Sarah', 'John'],
    hasDriversLicense: false,

    // calculateAge: function(){
    //     console.log(this);
    //     return 2022 - this.birthYear;
    // }
    calculateAge: function(){
        this.age = 2022 - this.birthYear;
        return this.age;
    },  

    getSummary: function(){
        return `${jonas.firstName} is a ${jonas.calculateAge()} years old ${jonas.job} and he has` +
        ` ${jonas.hasDriversLicense ? 'a' : 'no'} driver's license.`;

    }
};

console.log(jonas.calculateAge());

console.log(jonas.age);
console.log(jonas.getSummary())
//challenge
//jonas is a 46 year old teacher and he has a/no driver's license.



