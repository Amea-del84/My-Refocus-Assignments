

const calculateBMI = require("./bmi_calculator");

test("checks if the bmi is Normal or Healthy Weight range", () => {
    expect(calculateBMI(65, 1.8)).toEqual("Normal or Healthy Weight range");
});

test("checks if the bmi is Obese range", () => {
    expect(calculateBMI(120, 1.8)).toEqual("Obese range");
});

test("checks if the bmi is Underweight", () => {
    expect(calculateBMI(48, 1.8)).toEqual("Underweight");
});