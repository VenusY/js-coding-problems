function solution(input) {
  if (!Array.isArray(input)) {
    return 'Invalid input';
  }

  const uniqueElements = new Set(input);
  return uniqueElements.size;
}
