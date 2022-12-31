
//TASK 3.

// "DELETE SLASH" below to check!!!! and the username and password is need to be wrong".

//var getBankAccountDetails;
//getBankAccountDetails("FOCUS_GOAL"); // wrong username to check the output.

//getBankAccountDetails(); // EDIT TO SHOW BANK ACCOUNT DETAILS (to logging in)

let balance = bankAccount.balance;
let username = bankAccount.credentials[0[0]];
let password = bankAccount.credentials[1[1]];

function getBankAccountDetails(username, password) {
    if ((username == bankAccount.credentials[0[0]]) && (password == bankAccount.credentials[1[1]])) {
        console.log(`          *ACCOUNT DETAILS*                 \n`);
        console.log(`Account ID        : ${ bankAccount.bankAccountID}`);
        console.log(`Account Name      : ${userAccount.firstName} ${userAccount.lastName}`);
        console.log(`Account Number    : ${bankAccount.accountNumber}`);
        console.log(`Current Balance   : ${bankAccount.balance}`);
        console.log("Account Type      : Savings Account")
        console.log(`Date Created      : ${bankAccount.createdAt}`);
     
    } else {
        console.log("Sorry! You entered an invalid username or password. Please check and try again thank you!");
    }
}


// "DELETE SLASH" below to check!!!!
//var amount;  //or var withdrawMoney;
//withdrawMoney(0)
//withdrawMoney(2600)
//withdrawMoney(1000)

//var Username;
//withdrawMoney(username)
//var Password
//withdrawMoney(password)
//var accountNumber;
//withdrawMoney(accountNumber)

function withdrawMoney(amount){
    if (amount > balance){
        console.log(`Sorry! You cannot withdraw greater than your current balance.`)      
    } else if (amount == 0){
        console.log("You don't have any settlement yet!");
        console.log(`You may now proceed to the transaction with your account number:` + " " + bankAccount.accountNumber)
    } else if (amount < balance){
        balance = balance - amount
        console.log(`Your withdrawal request of ₱${amount} has been successfully processed.`)
        console.log(`Your current balance in your account is ₱${balance}.`)
    } else if (
        (username === bankAccount.credentials[0[0]]) || (password === bankAccount.credentials[1[1]])
        || (accountNumber === bankAccount.accountNumber)) {
        console.log("Username or Password or Account number is incorrect. Please try again, thank you.")
    } else { 
        console.log("Transaction Failed!")
    }  
};

    
// "DELETE SLASH" below to check!!!!
//var amount; //or
//var deposit;  
//depositMoney(0)
//depositMoney(500)

function depositMoney(amount){      
    let balance = bankAccount.balance;
    if (amount > 0){
        balance += amount; //balance = balance + amount;
        console.log(`Hi ${userAccount.firstName}! ₱${amount} has been added tou your account.`);
        console.log(`Your new updated balance is ₱${balance}.`)
    } else {
        console.log("You cannot deposit a negative amount.")            
    }     
};





