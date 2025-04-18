function solution(A) {
  let maxNumber;

  for (let number of A) {
    if (number < 0) {
      continue;
    }

    maxNumber = maxNumber || number;

    if (number > maxNumber) {
      maxNumber = number;
    }
  }

  if (!maxNumber) {
    return 1;
  }

  for (let i = 1; i < maxNumber; i++) {
    if (!A.includes(i)) {
      return i;
    }
  }

  return maxNumber + 1;
}
