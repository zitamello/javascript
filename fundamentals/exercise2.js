const massMark = 85;
const heightMark = 1.72;

const massJohn = 93;
const heightJohn = 1.84;

const massMell = 68.4;
const heightMell = 1.60;

const BMIMark = Math.round(massMark / (heightMark * heightMark));
const BMIJohn = Math.round(massJohn / (heightJohn ** 2));
const BMIMell = Math.round(massMell / (heightMell ** 2));

console.log(`Mark has the BMI of ${BMIMark}, John has the BMI of ${BMIJohn} and Mell has the BMI of ${BMIMell}`);

if (BMIMark > BMIJohn) {
  console.log(`Mark has the BMI of ${BMIMark}` + " and is higher than everyone else.");
} else if (BMIJohn > BMIMark) {
  console.log(`John has the BMI of ${BMIJohn}` + " and is higher than everyone else.");
} else if (BMIMark > BMIJohn && BMIMark <= BMIMell) {
  console.log(`Mark has the BMI of ${BMIMark} and is higher than John's but lower than Mell's.`);
} else {
  console.log(`Mell has the BMI of ${BMIMell}` + " and is higher than everyone else.");
}
