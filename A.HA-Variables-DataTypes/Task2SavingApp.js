
//TASK 2. Saving App

// Suppose that Sam wants to save ₱10,000 and has already saved ₱7,500
// Use console.log and variables to output the following in JavaScript:
// “Thank you for your discipline and hardwork, Sam! You are now 25% away from your goal of saving ₱10,000.”

let samSavingsGoal = 10000;
let currentBalance = 7500;
let samGoalPercentage = samSavingsGoal - currentBalance;
let samTotalPercentageLeft = (samGoalPercentage * 100) / 10000

console.log(`Thank you for your discipline and hardwork, Sam! You are now ${samTotalPercentageLeft}% away from your goal of saving ${samSavingsGoal}.`);


