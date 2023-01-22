"use strict";
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
//------------- MY SOLUTION
const johnHigherBmi = john.calcBMI() > mark.calcBMI() ? true : false;
console.log(
  `${johnHigherBmi ? "John's" : "Mark's"} BMI (${
    johnHigherBmi ? john.calcBMI() : mark.calcBMI()
  }) is higher than ${!johnHigherBmi ? "John's" : "Mark's"} (${
    !johnHigherBmi ? john.calcBMI() : mark.calcBMI()
  }) `
);

//-----------------  JONAS'S SOLUTION
john.calcBMI();
mark.calcBMI();
if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`
  );
}
