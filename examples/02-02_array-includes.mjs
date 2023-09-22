const elements = ['🥝', '🍓', '🍋']

console.log(elements.includes('🍓'))
// Does the array include the 🍓?
// expected output: true
console.log(elements.includes('🍓', 2))
// Does the array (from index 2) include the 🍓?
// expected output: false
console.log(elements.includes('🍋', 2))
// Does the array (from index 2) include the 🍋?
// expected output: true
console.log(elements.includes('🧃'))
// Does the array include the 🧃?
// expected output: false
