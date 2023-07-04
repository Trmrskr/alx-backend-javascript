export default function cleanSet(set, startString) {
  const iterator = Array.from(set.values());

  if (startString === '') return '';

  return iterator
    .filter((string) => string.startsWith(startString))
    .map((string) => string.replace('bon', ''))
    .join('-');
}
