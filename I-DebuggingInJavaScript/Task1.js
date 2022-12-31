
/* Fix code errors
  
  The invoicing department has a problem on their system: the developer who wrote this code is on a vacation leave,
  so it's up to you to fix all the errors ASAP.
  Download the code, and use the debugging methods you learned in this lesson to fix all the errors:
  https://drive.google.com/file/d/1fQ1Lzz5KGmoJ15P1_1Y1iy-MVZBCm1NB/view?usp=sharing
  
  Hint:
  The result should look like this:
  
  Invoice Name: Invoice 001
  Products:
  24" Monitor - ₱10000 x 5
  Keyboard and Mouse set - ₱1500 x 4
  -------------
  Total: ₱56000

  Invoice Name: Invoice 002
  Products:
  Projector - ₱15000 x 2
  Speakerphone - ₱5500 x 1
  Aircon - ₱25200 x 3
  -------------
  Total: ₱167100
*/

// GIVEN EQUATION/PROBLEM:

// var invoiceDocument = [
//   {
//   InvoiceID: 001,
//   DocumentName: "Invoice 001",
//   DocumentType: "invoice",
//   Name: "Fly High Business Inc.",
//   Product: [
//     {
//       Description: `24" Monitor`,
//       QTY: 5,
//       Price: 10000,
//     },
//     {
//       Description: `Keyboard and Mouse set`,
//       QTY: 4,
//       Price: 1500,
//     },
//   ],
// },
// {
//   InvoiceID: 002,
//   DocumentName: "Invoice 002",
//   DocumentType: "invoice",
//   Name: "Bracket Logic Appliances Inc.",
//   Product: [
//     {
//       Description: `Projector`,
//       QTY: 2,
//       Price: 15000,
//     },
//     {
//       Description: `Speakerphone`,
//       qty: 1,
//       Price: 5500,
//     },
//     {
//       Description: `Aircon`,
//       QTY: 3,
//       Price: 25200,
//     },
// },
// ];

// function totalPerInvoice() {
// let total = 0;
// invoiceDocuments.forEach((data) => {
//   console.log(`Invoice Name: ${data.DocumentName}`);
//   let ProductDescription = data.prod.map((prod) => {
//     total += prod.price;
//   });

//   console.log(`Products:`);
//   console.log(`${ProductDescription.join("")} `);
//   console.log(`-------------`);
//   console.log(`Total: ₱${total} \n`);
// });
// }

// totalPerInvoice();



//SOLUTION:

var invoiceDocument = [
    {
    InvoiceID: 001,
    DocumentName: "Invoice 001",
    DocumentType: "invoice",
    Name: "Fly High Business Inc.",
    Product: [
      {
        Description: `24" Monitor`,
        QTY: 5,
        Price: 10000,
      },
      {
        Description: `Keyboard and Mouse set`,
        QTY: 4,
        Price: 1500,
      },
    ],
  },
  {
    InvoiceID: 002,
    DocumentName: "Invoice 002",
    DocumentType: "invoice",
    Name: "Bracket Logic Appliances Inc.",
    Product: [
      {
        Description: `Projector`,
        QTY: 2,
        Price: 15000,
      },
      {
        Description: `Speakerphone`,
        QTY: 1,
        Price: 5500,
      },
      {
        Description: `Aircon`,
        QTY: 3,
        Price: 25200,
      },
    ],
  }
];
 
function totalPerInvoice() {
  let total = 0;
  invoiceDocument.forEach((data) => {
    console.log(`Invoice Name: ${data.DocumentName}`);
    console.log(`Products:`);
    let ProductDescription = data.Product.map((prod) => {
    console.log(`${prod.Description} - ₱${prod.Price} x ${prod.QTY}`)
    total += prod.Price * prod.QTY;
  });

    console.log(`${ProductDescription.join("")} `);
    console.log(`-------------`);
    console.log(`Total: ₱${total} \n`);
  });
}
 
totalPerInvoice();



