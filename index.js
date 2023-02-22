let a = 5
let b = 8

if (b > a) {
    console.log(b)
}


// ---------------- //
function solve(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber)
}

solve(5, 4)


// ---------------- //
function solve2(name, age) {
    let output = `My name is ${name} and age is ${age}`;
    console.log(output);
}

solve2('Daniel', 20);


// ---------------- //
function solve3(grade) {
    console.log(grade.toFixed(2));
}

solve3(4.44242);    //4.44, returns a rounded string!


// ---------------- //
let isTrue = true;
let empty = null;
let unknown = undefined; //ne deklarirana promenliva


// ---------------- //
function solve4() {
    //for (let index = 0; index < 5; index++) {     let has block scope, use this!
    for (var index = 0; index < 5; index++) {     
    }
    console.log(index)
}

solve4();


// ---------------- //
// arithmetic operators: +, -, *, /, %, **
console.log(Math.floor(7/3))    // 2


let num = 1;                //number sluji za int i float
let name = 'Daniel';
let output = name + num;
console.log(output);        // Daniel1
console.log(typeof output);  // string

let arr = [];   // array
let obj = {};   // object


// ---------------- //
console.log(1 == '1');      // sravnqva stoinostta,     true
console.log(1 === '1');     // sravnqva stoinostta i tipa,    false
console.log(3 != '3');
console.log(3 !=='3');


// ---------------- //
let first = 7;
if (5 <= first && first <= 20) {
    console.log('blahblah')
} else {
    console.log('gg')
}


// ---------------- //
let named = 'Daniel'
switch (named) {
    case 'Daniel':
        console.log(named);
        break;

    default:
        console.log('default');
        break;
}


// ---------------- //
// ! - not, && - AND, || - OR


// ---------------- //
let i = 1
while (i <= 5) {
    console.log(i);
    i++;
}


// ---------------- //
// arrays are like lists in python: no fixed lenght and diff types inside

let numbersArray = [10, 20, 'hello'];
console.log(`Lenght is: ${numbersArray.length}`);
// console.log(numbersArray[-1])       // doesnt work!

let numbersArray2 = [1, 2, 3];
let [firstN, secondN, thirdN, fourthN] = numbersArray2; // unpacking
console.log(firstN)     // 1
console.log(fourthN)    //undefined

let numbersArray3 = [1, 2, 3, ...[4, 5, 6]];
console.log(numbersArray3)  // (6) [1, 2, 3, 4, 5, 6]



// ---------------- //
function solve5(name, ...otherParams) {     // like: *args
    console.log(name);
    console.log(otherParams);   // (3) ['Maxi', 'is', 'noob']

    for (const el of otherParams) {     // like: for item in list, but cant change the items!
        console.log(el); 
    }
}

solve5('Daniel', 'Maxi', 'is', 'noob')


// ---------------- //
let numbersArray4 = [1, 2, 3, 4, 5, 6];
let output4 = numbersArray4.join(', ');     // like python
console.log(output4); 


// ---------------- //
// .pop()   pop
// .push()   append
// .shift()   popleft
// .unshift()   appendleft

// .reverse()
// .join(', ')
// .split(' ')
// .includes()  // returns true or false
// .indexOf()
// .map((num) => num * 2)
// .filter((num) => num % 2 === 0)
// nqma insert, a se polzva splice


// ---------------- //
let numbersArray5 = [1, 2, 3, 4, 5, 6];
console.log(numbersArray5.slice(1, 3));     // (2) [2, 3]
console.log(numbersArray5.splice(0, 2));     // (2) [1, 2] are deleted
console.log(numbersArray5.splice(0, 2));     // (2) [0, 2, ...toInsert] substitutes elements

numbersArray5.forEach((num) => {        // another method of iteration
    console.log(num);
})


// ---------------- //
let text1 = 'Hello' + ', MF'
console.log(text1.indexOf('llo'));  // index of substring is: 2
console.log(text1.substring(0, 3))  // returns substring from index 0 to index 2
console.log(text1.replace('He', 'Gd'))  // replaces He with Gd 1 time only

string7 = '*'.repeat(4)
console.log(string7)        // ****

