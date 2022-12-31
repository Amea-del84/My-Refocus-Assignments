
/*
    Task 1. Design a bank application
    Create a feature for a bank app that allows users to do 3 things: check their
    balance and withdraw or deposit money. It is forbidden to manually modify
    the balance. Users can only do it using the 3 rules mentioned above.
    Develop a closure to enable this feature

    You cannot withdraw an amount greater than your current balance.
*/

function createBankAccount(name){
    let balance = 1000;   
    
    function depositAmount(amount){
        balance += amount;
        console.log("Hi " + name + "! " + amount + "has benn added to your account.");
        console.log("Your new balance is " + balance);
    }
    
    function checkBalance(name, balance){
        console.log("Hi " + name + "! Your new balance is " + balance);       
    }
    
    availableBalance(balance);
    return checkbalance;

    function withdrawAmount(balance){
        console.log("Withdraw from ");
        console.log("savingsAccount...4567 ");
        console.log("Available balance " + "₱ " + balance); 
        console.log(" You cannot withdraw an amount greater than your current balance. ")          
    }
    return withdrawAmount;
};

