const numbers = [1, 2, 3, 4, 5]

const sumWithInitialValue = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 0) //Here 0 is an initial value to the accumulator

/* Here if we do not mention initialValue '0', then initial value of accumulator will be first array value 
and the currentValue will be second value of Array. */
const sumWithoutInitialValue = numbers.reduce((acc, curr) => {
  return acc + curr
})

console.log('SumWithInitialValue:', sumWithInitialValue)
console.log('SumWithoutInitialValue:', sumWithoutInitialValue)
