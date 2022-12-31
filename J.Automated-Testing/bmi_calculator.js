// Module 1, Unit 2, Lesson 1, Assignment 1, Task 2
// Write a simple code that calculates a person's BMI or Body Mass Index


let weightInKg = 0;
let heightInM = 0;

function calculateBMI(weightInKg, heightInM) {
    let bmi = weightInKg / (heightInM * heightInM);
    if (bmi <18.5) {
        return "Underweight";
    } else if ((bmi >= 18.5) && (bmi <= 24.9)) {
        return "Normal or Healthy Weight range";
    } else if ( (bmi >= 25.0) && (bmi <= 29.9)) {
        return "Overweight range";
    } if (bmi >=30) {
        return "Obese range";
    }
}

module.exports = calculateBMI;