export default function appendToEachArrayValue(array, appendString) {
  const newArray = [...array];
  for (const [idx, value] of newArray.entries()) {
    if (idx === newArray.length - 1) {
      newArray[idx] = appendString + value;
    }
  }
  return newArray;
}
