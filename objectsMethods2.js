const person = {
    firstName: 'Byul',
    lastName: 'Moon',
    birthYear: 1992,
    job: 'rapper',
    hasDriversLicense: false,
    friends: ['Solar', 'Wheein', 'Hwasa', 'Seulgi'],

    calculateAge: function () {
        this.age = 2022 - this.birthYear;
        return this.age;
    },

    getSummary: function() {
        this.description = `${person.lastName}${(person.firstName).toLowerCase()} is a ${person.calculateAge()} years old ${person.job} and she has`;
        if (person.hasDriversLicense) {
            this.summary = this.description + ` a driver's license which she uses to drive her ${person.friends.length} friends home.`; 
            return this.summary;
        }else {
            this.summary = this.description + ` not a driver's license. Her ${person.friends.length} friends need to take the bus in order to go home.`;
            return this.summary;
        }
    },

    getSummary2: function() {
        return `${this.lastName}${(this.firstName).toLowerCase()} is a ${this.calculateAge()} years old` + 
        ` and she has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
    }

}

//output 
//moonbyul is a (age) years old rapper and has a drivers license which she uses to drive her 4 friends home.
//must return this whole string as an object Method
console.log(person.getSummary());
console.log(person.getSummary2());