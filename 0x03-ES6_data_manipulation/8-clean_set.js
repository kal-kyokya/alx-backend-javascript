export default function cleanSet(inputSet, startString) {
  let result = '';

  if (!startString || !(typeof startString === 'string')) return result;

  inputSet.forEach((element) => {
    if ((typeof element === 'string') && element.length > 0) {
      if (element.startsWith(startString)) {
        result += `${element.slice(startString.length)}-`;
      }
    }
  });

  if (result.endsWith('-')) {
    result = result.slice(0, -1);
  }

  return result;
}
