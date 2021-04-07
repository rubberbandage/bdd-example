const calculateNextNumber = (value: number) => value + 1
const calculatePreviousNumber = (value: number) => Math.floor(Math.random() * 200) + value

export { calculateNextNumber, calculatePreviousNumber }