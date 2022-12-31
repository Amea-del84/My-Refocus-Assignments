

// Find the first uppercase letter

// The news company needs to find the first uppercase letter in each of their articles. 
//Create an algorithm which checks a text and finds its first uppercase letter.

// Hint
// In the text “there is a storm coming to the East of the Philippines”, the result is “E”.

// Hint
// In the text “no more rainy days here, sun is about to show up” there are no upper-case letters. 
// Use consoles messages to make sure that users are aware of this fact.


let arr_sentence = 
    // "there is a storm coming to the East of the Philippines"; //DELETE SLASH TO TEST THE FIRST UPPERCASE LETTER
    // "no more rainy days here, sun is about to show up"        // DELETE SLASH TO TEST IF THERE IS NO UPPERCASE LETTER

let firstUpperCaseLetter = "";

for(let index = 0; index < arr_sentence.length; index++) {
    let character = arr_sentence.charAt(index);
    if(character.match(/[A-Z]/)){
        firstUpperCaseLetter = character;
        break;
    }
}
if(firstUpperCaseLetter == "") { 
    console.log("There's no uppercase letter in the sentence.") // show this message if no uppercase letter found
}else{
    console.log(`The first uppercase letter found is: ${firstUpperCaseLetter}`) // SHOWS THE RESULT if it has uppercase letter
}