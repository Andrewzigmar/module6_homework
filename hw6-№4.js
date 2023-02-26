function printNumbers(x, y) {
  let showNum = x;

  let timerId = setInterval(function() {
    console.log(showNum);
    if (showNum == y) {
      clearInterval(timerId);
    }
    showNum++;
  }, 1000);
}


printNumbers(5, 15);