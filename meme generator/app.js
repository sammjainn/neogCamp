let btnTranslate = document.getElementById('btn-translate');
let firstInp = document.getElementById('text-1');
let secondInp = document.getElementById('text-2');
let firstOut = document.getElementById('first-line');
let secondOut = document.getElementById('second-line');

function mockingText(str) {
  let strArray = str.toLowerCase().split('');
  let mocked = strArray.map((x, i) => (i % 2 === 0 ? x.toUpperCase() : x));
  return mocked.join('');
}

function createMeme(text1, text2) {
  firstOut.innerText = text1;
  secondOut.innerText = text2;
}

function clickHandler() {
  let text1 = firstInp.value;
  let text2 = secondInp.value;

  createMeme(text1, mockingText(text2));
}

btnTranslate.addEventListener('click', clickHandler);
