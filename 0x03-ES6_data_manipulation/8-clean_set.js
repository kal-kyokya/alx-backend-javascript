export default function cleanSet(inputSet, startString) {
  let result = '';

  if (!startString) return result;

  inputSet.forEach((element) => {
    if (element.startsWith(startString)) {
      result += `${element.slice(startString.length)}-`;
    }
  });

  if (result.endsWith('-')) {
    result = result.slice(0, -1);
  }

  return result;
}
