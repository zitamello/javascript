const neighbours = ['Argentina', 'Bolivia', 'Colombia', 'Uruguay', 'Paraguay', 'Venezuela'];
neighbours.push('Utopia');

neighbours.pop();
if (!neighbours.includes('Germany')) {
    console.log('Probably not a central European Country :D');
}

const indexCountry = neighbours.indexOf('Colombia');
console.log(indexCountry);

neighbours[indexCountry] = 'Republic of Colombia';
console.log(neighbours);