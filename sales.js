"use strict";

//create iterate function
function sumArray(arr) {
    let sum = 0;
    //initializeloop
    //creating variable and setting to zero
    //4 items in array
    //index is [0, 1, 2, 3]
    //which is why we check if the array length is less than 4,
    //and not <=4 (bc it does not exist, would just cause an error)
    //i++: increase the value of variable 'i' by 1 after a loop
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

//original sales data
const region1 = [1540, 1130, 1580, 1105];
const region2 = [2010, 1168, 2305, 4102];
const region3 = [2450, 1847, 2710, 2391];
const region4 = [1845, 1491, 1284, 1575];
const region5 = [2120, 1767, 1599, 3888];

//calculate totals by quarter, Define constant and use a for loop
const quarterTotals = [0, 0, 0, 0];
//initialize with 'let i =0'
//with condition that (i < quarterTotals.length)
//iterate by (i++). Increasing i by 1 after each loop until it has fully gone through the array
for (let i = 0; i < quarterTotals.length; i++) {
    quarterTotals[i] = region1[i] + region2[i] + region3[i] + region4[i] + region5[i];
}

// display totals by quarter, document write and use a for loop
document.write("<h2>Sales by Quarter</h2>");
//loop
for (let i = 0; i < quarterTotals.length; i++) {
    //'quarter $0+1=1: showing quarter total of index 0 (quarter 1)'
    document.write(`Quarter ${i + 1}: $${quarterTotals[i]}<br>`);
}

//calculate totals by region, define constant and use a for loop
const regionTotals = [0, 0, 0, 0, 0];
//array of arrays
const region = [region1, region2, region3, region4, region5];
//for loop
for (let i = 0; i < region.length; i++) {
    for (let j = 0; j < region[i].length; j++) {
        regionTotals[i] += region[i][j];
    }
}

// display totals by region, document write and use a for loop with a document write in the loop.
document.write("<h2>Sales by Region</h2>");
//loop
for (let i = 0; i < regionTotals.length; i++) {
    document.write(`Region ${i + 1}: $${regionTotals[i]}<br>`);
}

// calculate total sales, use a for loop to add all the quarter totals together.
let totalSales = 0;
//for loop
for (let i = 0; i < quarterTotals.length; i++) {
    totalSales += quarterTotals[i];
  }

// display total sales, use document write to display on html page
document.write("<h2>Total Sales</h2>");
document.write(`$${totalSales}`);
