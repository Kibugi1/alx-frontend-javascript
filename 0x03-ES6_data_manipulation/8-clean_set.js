export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  const valuesArray = Array.from(set);
  const displayValues = valuesArray
    .filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length));

  // Join the display values with "-"
  return displayValues.join('-');
}
