
// Module 1, Unit 2,, Lesson 1

//TASK 1-Manual Testing for BMI
// Write a simple code that calculates a person’s BMI or Body Mass Index.

function calculateBMI (weightInKg, heightInM){
    return (weightInKg/(heightInM*heightInM))
}

function testBMI(){
    const result = calculateBMI(65, 1.8);
    const expected = 20.06172839506173; //here, it doesn't match because of rounding off the lasst 2 digit.

    console.assert(
        result === expected,
        `The result ${result} doesn't match the expected value ${expected}`
    )
}

testBMI()