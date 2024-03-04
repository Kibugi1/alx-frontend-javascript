export default function appendToEachArrayValue(array, appendString) {
  const newArray = [...array];
  for (const [idx, value] of array.entries()) {
    if (idx === array.length - 1) {
      newArray[idx] = appendString + value;
    }
  }
  return newArray;
}
