function solution(A) {
  const positiveIntegers = new Set();
  let maxNumber = A[0];

  for (let number of A) {
    if (number > 0) {
      positiveIntegers.add(number);
    }

    if (number > maxNumber) {
      maxNumber = number;
    }
  }

  if (positiveIntegers.size === 0) {
    return 1;
  }

  for (let i = 1; i < maxNumber; i++) {
    if (!positiveIntegers.has(i)) {
      return i;
    }
  }

  return maxNumber + 1;
}

console.log(solution([-1, -2, -3, 1, 2]));
