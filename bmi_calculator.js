// Module 1, Unit 2,, Lesson 1

//TASK 2
// Write a simple code that calculates a person’s BMI or Body Mass Index.

// Add an if statement to check if bmi is <18.5. Inside the if block write return the sentence: "Underweight".
// Add an else if statement to check if bmi is 18.5 and 24.9. Inside the else if block, write return "Normal or Healthy Weight range".
// Add another else if to check if bmi is 25.0 to 29.9. Inside the else if block write return "Overweight range".
// Add an else statement to check is bmi is ≥30. Inside the block write return "Obese range".

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

console.log(calculateBMI(65, 1.8));
