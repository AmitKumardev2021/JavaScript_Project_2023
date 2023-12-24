//check each word one by one
function getWordsCount(str) {
  let splitted = str.trim().split(/\s+/);
  console.log(splitted);
  if (splitted =='') {
    return 0;
  }
  return splitted.length;
}
function counter(str) {
  let alphaCount = 0;
  let numberCount = 0;
  let charCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] != " " && str[i] != "\n") {
      charCount++;
    }
    if ((str[i] >= "a" && str[i] <= "z") || (str[i] >= "A" && str[i] <= "Z")) {
      alphaCount++;
    } else if (str[i] >= "0" && str[i] <= "9") {
      numberCount++;
    }
  }
  document.querySelector("#chars").value = charCount;
  document.querySelector("#numbers").value = numberCount;
  document.querySelector("#alphabets").value = alphaCount;
}

function wordCounter() {
  let inputTxt = document.querySelector("#inputBox");
  let words = getWordsCount(inputTxt.value);
  document.querySelector("#words").value = words;
  counter(inputTxt.value);
}


