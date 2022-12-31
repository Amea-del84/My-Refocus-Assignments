
// TASK 2. CALLBACK FUNCTION

function createBankAccount(name, checkBalance, withdrawAmount){
    let balance = 1000;   
    
    function depositAmount(amount){
        balance += amount;
        console.log("Hi " + name + "! " + amount + " has ben added to your account.");
        console.log("Your new balance is " + balance + ".");
    };

    checkBalance(name, balance);
    withdrawAmount(balance);

    return {
        depositAmount,
        checkBalance,
        withdrawAmount
    }

}

function checkBalance(name, balance){
    console.log("Hi " + name + "! Your new balance is " + balance + ".");       
};

function withdrawAmount(amount){
    let balance = 1000; 
    if (amount > balance){
        console.log(`Sorry! You cannot withdraw greater than your current balance.`)      
    } else if (amount == 0){
        console.log("You don't have any settlement yet!");
    } else if (amount < balance){
        balance = balance - amount
        console.log(`Your withdrawal request of ₱${amount} has been successfully processed.`)
        console.log(`Your current balance in your account is ₱${balance}.`)
    } 
};

const bank = createBankAccount("Baxter", checkBalance, withdrawAmount);
bank.depositAmount(500)
bank.withdrawAmount(600)