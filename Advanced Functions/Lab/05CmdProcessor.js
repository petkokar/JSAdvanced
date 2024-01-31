function solution() {
  let internalString = "";
  function append(string) {
    internalString += string;
  }

  function removeStart(num) {
    internalString = internalString.substring(num);
  }

  function removeEnd(num) {
    internalString = internalString.slice(0, -num);
  }

  function print() {
    console.log(internalString);
  }

  return {
    append,
    removeStart,
    removeEnd,
    print,
  };
}

let secondZeroTest = solution();
secondZeroTest.append("123");
secondZeroTest.append("45");
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();
