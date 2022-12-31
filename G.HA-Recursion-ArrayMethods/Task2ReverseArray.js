
/*
Task 2. Reverse the array of invoices
*/

let InvoiceList = [
    "Invoice 008",
    "Invoice 007",
    "Invoice 006",
    "Invoice 005"
];

function insertToBottom(add_inv) {
    if(add_inv <= 0) {
        console.log(InvoiceList.join(" "))
    } else {
        InvoiceList.push("Invoice 00"+ add_inv)
        return insertToBottom(add_inv - 1)
    }
}
insertToBottom(4); 

function reverseList(reverse) {
    if(reverse === true){
        return console.log(InvoiceList.join(" "))
    } else {
        InvoiceList.reverse();
        return reverseList(true);
    }
}

//reverseList(false);

InvoiceList.push("Invoice 004");
InvoiceList.push("Invoice 003");
InvoiceList.push("Invoice 002");
InvoiceList.push("Invoice 001");
console.log(InvoiceList.join(" "));

reverseList();
//console.log(InvoiceList.join(" "));
   
