
//Task 2. Tip Calculator

//asked to design an app that enables you to leave a tip.
//The tip should be 10% of a meal cost.
//Write a code that shows the total tip to be paid based on the food price.
//Use the formula mealTip = totalBill / (10%).
//use the simplifying formula "mealTip = totalBill / (0.10 * 100)".
//Store the result into a new variable named mealTip.
//Return the calculated value. (Use return keyword).

function computeTip(totalBill){
    let mealTip = totalBill / (0.10 * 100);
    return mealTip;
}

console.log(computeTip(245.50))//245.50 Total bill = 24.55
console.log(computeTip(386.70))//386.70 Total bill = 38.67
