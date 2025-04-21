function solution(input) {
  if (!Array.isArray(input)) {
    return `Invalid input - not an array. Input is of type ${typeof input}.`;
  }

  const frequencyMap = new Map();

  for (let element of input) {
    if (typeof element !== 'number') {
      return 'Invalid array - must only contain numbers.';
    }

    if (frequencyMap.has(element)) {
      frequencyMap.set(element, frequencyMap.get(element) + 1);
    } else {
      frequencyMap.set(element, 1);
    }
  }

  const duplicates = [];

  for (let keyValuePair of frequencyMap) {
    if (keyValuePair[1] > 1) {
      duplicates.push(keyValuePair[0]);
    }
  }

  if (duplicates.length > 0) {
    return duplicates;
  }

  return 'No duplicates.';
}
