
//TASK 1.

// Use var keyword to declare a variable spo2. Set it to 95%.
var spo2 = 82;

// Add an if statement to check if spo2 is ≥96%. Inside the if block write console.log the sentence: "Normal reading".
// Add an else if statement to check if spo2 is 95%. Inside the else if block, write console.log "Acceptable to continue home monitoring".
// Add another else if to check if spo2 is 93%-94%. Inside the else if block write console.log "Seek advice for health proffessionals".
// Add an else statement to check is spo2 is ≤92%. Inside the block write console.log "Seek urgent medical advice".

function myHeedPulse(spo2) {
    if (spo2 >=96) {
        console.log("Normal Reading.");
    } else if (spo2 == 95) {
        console.log("Acceptable to continue home monitoring.");
    } else if ( (spo2 == 93) || (spo2 == 94)) {
        console.log("Seek advice for health professionals.");
    } if (spo2 <=92) {
        console.log("Seek urgent medical advice.");
    }
}

myHeedPulse(spo2);
