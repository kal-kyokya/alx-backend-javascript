export default function hasValuesFromArray(inputSet, inputArray) {
  let bool = true;
  inputArray.forEach((element) => {
    if (inputSet.has(element)) {
      bool = true;
    } else {
      bool = false;
    }
  });

  return bool;
}
