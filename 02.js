function manipulateString(str) {
  const uppercaseStr = str.toUpperCase();
  return function logString() {
    console.log("The manipulated string is: ", uppercaseStr);
  };
}
const myString = "hello world";
const logCallback = manipulateString(myString);
logCallback();