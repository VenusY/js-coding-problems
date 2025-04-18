function solution(input) {
  if (typeof input !== 'string' && !Array.isArray(input)) {
    return 'Invalid input';
  }

  const lastIndex = input.length - 1;

  if (typeof input === 'string') {
    let reversedString = '';

    for (let i = lastIndex; i >= 0; i--) {
      reversedString += input[i];
    }

    return reversedString;
  }

  let reversedArray = [];

  for (let i = lastIndex; i >= 0; i--) {
    reversedArray.push(input[i]);
  }

  return reversedArray;
}
