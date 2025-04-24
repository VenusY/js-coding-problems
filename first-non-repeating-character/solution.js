function solution(string) {
  if (typeof string !== 'string') {
    return 'Invalid input type. Must be a string.';
  }

  const frequencyMap = new Map();

  for (let i = 0; i < string.length; i++) {
    if (!frequencyMap.has(string[i])) {
      frequencyMap.set(string[i], 1);
    } else {
      frequencyMap.set(string[i], frequencyMap.get(string[i]) + 1);
    }
  }

  for (let [char, frequency] of frequencyMap) {
    if (frequency === 1) {
      return char;
    }
  }

  return 'None';
}
