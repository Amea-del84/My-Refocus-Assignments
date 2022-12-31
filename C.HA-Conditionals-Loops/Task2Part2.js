
//TASK 2.

// Use var keyword to declare a variable prbpm. Set it to 42.
var prbpm = 120;

// Add an if statement to check if prbpm is 40-100. Inside the if block write console.log the sentence: "Normal reading".
// Add an else if statement to check if prbpm is 101-109. Inside the else if block, write console.log "Acceptable to continue home monitoring".
// Add another else if to check if prbpm is 110-130. Inside the else if block write console.log "Seek advice for health proffessionals".
// Add another else if statement to check is prbpm is ≥131. Inside the block write console.log "Seek urgent medical advice".

function myPulseBeat(prbpm) {
    if ((prbpm >=40) && (prbpm <= 100)) {
        console.log("Normal Reading.");
    } else if ((prbpm >= 101) && (prbpm <= 109)) {
        console.log("Acceptable to continue home monitoring.");
    } else if ( (prbpm >=110) && (prbpm <= 130)) {
        console.log("Seek advice for health professionals.");
    } else if (prbpm >=131) {
        console.log("Seek urgent medical advice.");
    }
}

myPulseBeat(prbpm);