
/*
Task 1. Find the most used item on the array

You have an array with some repeated elements. For example, the element
“Web Developer” is repeated 3 times below.

Create an algorithm that counts the number of times each element is repeated
and shows the result using the console.

The result should look like this object:
{ 'Web Developer': 3, Refocus: 2, Awesome: 1 
*/

const arr = [
    "Web Developer",
    "Refocus",
    "Web Developer",
    "Web Developer",
    "Refocus",
    "Awesome",
];

const count = {};
arr.forEach(element => {
    count[element] = (count[element] || 0) + 1;
});

//console.log(count); //DELETE SLASH THIS LINE TO CHECK!!