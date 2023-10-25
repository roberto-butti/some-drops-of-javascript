//Examples for padStart()

const text = "Hello";
const paddedText = text.padStart(10);
console.log(paddedText); // "     Hello"

const text1 = "Worlds";
const paddedText1 = text1.padStart(10, '-*');
console.log(paddedText); // "-*-*Worlds"

const text2 = "World";
const paddedText2 = text2.padStart(10, '0');
console.log(paddedText); // "00000World"

const text3 = "JavaScript";
const paddedText3 = text3.padStart(5);
console.log(paddedText); // "JavaScript"

const text4 = "OpenAI";
const paddedText4 = text4.padStart(10, 'Knowledge ');
console.log(paddedText); // "Knowledge OpenAI"

// Examples for padEnd()

const text5 = "Hello";
const paddedText5 = text5.padEnd(10);
console.log(paddedText); // "Hello     "

const text6 = "World";
const paddedText6 = text6.padEnd(10, '*');
console.log(paddedText); // "World*****"

const text7 = "JavaScript";
const paddedText7 = text7.padEnd(5);
console.log(paddedText); // "JavaScript"

const num4 = 42;
const paddedNum4 = num4.toString().padEnd(6, '0');
console.log(paddedNum); // "420000"
