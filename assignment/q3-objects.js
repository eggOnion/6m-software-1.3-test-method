/*
    Task:
    You are to convert the given two arrays (bookIdArr & bookTitle) into an object (booksObj) with four key value pairs:
    - NLB1 -> Lord of the Rings
    - NLB2 -> Programming for Dummies
    - NLB3 -> Introduction to Software Testing
    - NLB4 -> How to be a Software Developer

    Tips: 
    - Use a for loop and utilizes the index variable as a running number.
    - Be sure got use google!
*/

const bookIdArr = ["NLB1", "NLB2", "NLB3", "NLB4"];
const bookTitle = ["Lord of the Rings", "Programming for Dummies", "Introduction to Software Testing", "How to be a Software Developer"];
let booksObj = {};
let booksObjCounter = 0;


for (const bookID of bookIdArr) {						//Can this be done using reduce method so to reduce the usage of unwanted variable?   
    booksObj[bookID] = bookTitle[booksObjCounter];      //Only "dot" or "bracket" Notation can set the property's value of an object
    booksObjCounter++;
}
console.log('I\'m not from function:', booksObj);


function convert(keyArr, valueArr) {

    /*
        Tips:
        - Step 1: Create a local scoped object literal.
        - Step 2: Define a for-loop that run based on keyArr's length.
        - Step 3: Within the for-loop, add the key and value to the local scoped object.
        - Step 4: Write a return statement to return the object literal after the for-loop code block.
    */

    // Add code here

    //Remember that this 2 variables are "Local", and not "Global". They are not linked to the 2 variables outside this function though it uses the same name.
    let booksObj = {};
    let booksObjCounter = 0;

    for (let key of keyArr) {
		booksObj[key] = valueArr[booksObjCounter];      //Only "dot" or "bracket" Notation can be used to set the key's value
		booksObjCounter++;
    }

    return booksObj;
}

function printByKey(key) {
    console.log(booksObj[key]);
}

booksObj = convert(bookIdArr, bookTitle);
console.log('\nI\'m from function:', booksObj);

printByKey('NLB2'); // prints "Progamming for Dummies"

// Ignore the code below this line
module.exports = {
    convert
}

// Example of Referencing Online Resources

// 1. https://www.youtube.com/watch?v=W6NZfCO5SIk
// 2. https://developer.mozilla.org/en-US/
// 3. https://www.w3schools.com/html/