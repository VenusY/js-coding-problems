function solution(input) {
  if (!Array.isArray(input)) {
    return `Invalid input. Input should be an array. Your input is of type ${typeof input}.`;
  }

  let uniqueNumbers = new Set(input);
  let minNumber = input[0];
  let maxNumber = input[0];

  for (let number of input) {
    if (number < minNumber) {
      minNumber = number;
    }

    if (number > maxNumber) {
      maxNumber = number;
    }
  }

  const startingNumber = minNumber + 1;

  for (let i = startingNumber; i < maxNumber; i++) {
    if (!uniqueNumbers.has(i)) {
      return i;
    }
  }

  return 'No missing numbers.';
}

console.log(solution([2, 3, 3, 5]));
