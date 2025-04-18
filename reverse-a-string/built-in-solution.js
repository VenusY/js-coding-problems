function solution(input) {
  if (typeof input !== 'string' && !Array.isArray(input)) {
    return 'Invalid input';
  }

  if (typeof input === 'string') {
    const reversedString = input.split('').reverse().join('');
    return reversedString;
  }

  return input.reverse();
}
