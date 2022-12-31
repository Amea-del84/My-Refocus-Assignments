
// CREARE A BANK ACCOUNT
// CREATE USER ACCOUNT
// ADD FUNCTIONALITY TO THE SYSTEM

// To get autogenerate ID (for longhand):
// function autogenerateID(){
//     var retID = "MC-";
//     let len = retID.length;
//     do{
//         retID = "FOCUS-"+ Math.floor(Math.random() * 9999999999999999);
//         len = retID.length;
//     }
//     while (len !=20);
//     return retID;
// }

// To get current date:
// function getCurrentDate(){
//     const date = new Date();
//     let day = date.getDate();
//     let month = date.getMonth() + 1;
//     let year = date.getFullYear();
//     let xdate = `${month}/${day}/${year}`;
//     return new Date(xdate);
// }

// or //
function getCurrentDate(){
    const date = new Date();
    return date.toLocaleDateString();
}

//TASK 1.

const bankAccount = {
    "bankAccountID":`FOCUS-${(Math.random() * 9999999999999999).toFixed(0)}`, //or// autoGenerateID,
    "accountNumber": "4560078900",
    "credentials": [
        {"Username": 'Focus_Goal'},
        {"Password": 'loafBread'},
        {"PIN"     : '6667'}
    ],
    "balance": 2500,
    "createdAt": getCurrentDate(),
}
//console.log(bankAccount);
