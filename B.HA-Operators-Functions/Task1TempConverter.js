
//Task 1. Temperature converter

//Declare the function.
//Use the formula K = C + 273.15 to perform the conversion. Store the result into a new variable named tempKelvin.
//Return the calculated value. (Use return keyword).

//convertToKelvin(tempCelsius) that converts Celsius to Kelvin

function convertToKelvin(tempCelsius){
    let tempKelvin = (tempCelsius + 273.15);
    return tempKelvin;
}

console.log(convertToKelvin(25)) //25 C = 298.15
console.log(convertToKelvin(37)) //37 C = 310.15

//Declare the function.
//Use the formula K = (F - 32) x 5/9 + 273.15;
//Store the result into a new variable named tempKelvin.
//Return the calculated value. (Use return keyword).
//convertToKelvin(tempFahrenheit) that converts Fahrenheit to Kelvin

function convertToKelvin(tempFahrenheit){
    let tempKelvin = (tempFahrenheit - 32) * 5/9 + 273.15;
    return tempKelvin;
}

console.log(convertToKelvin(70)) //70 F = 294.15
console.log(convertToKelvin(80)) //80 F = 299.817