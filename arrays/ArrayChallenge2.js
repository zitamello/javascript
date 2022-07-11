const juliasDogsAges = [3, 5, 2, 12, 7];
const katesDogsAges = [10, 5, 1, 4];


const checkIfDogIsAdult = function (dogsArray) {
    dogsArray.forEach(function (age, index) {
        if (age > 3 ) {
        console.log(`Dog number ${index + 1} is an adult`);
    } else {
        console.log(`Dog number ${index + 1} is still a puppy.`);
        }
    })
}

const checkDogs = function (dogsArray1, dogsArray2){
    const dupJuliasDogs = dogsArray1;
    const dupKatesDogsAges = dogsArray2;
    dupJuliasDogs.splice(-2, 2);
    console.log(dupJuliasDogs, dupKatesDogsAges);
    const allDogs = dupJuliasDogs.concat(dupKatesDogsAges);
    console.log(allDogs)
    const isAdult = checkIfDogIsAdult(allDogs);
    return isAdult;
}

checkDogs(juliasDogsAges, katesDogsAges);