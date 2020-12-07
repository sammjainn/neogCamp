let btnTranslate = document.getElementById('btn-translate');
let inputArea = document.getElementById('in-txt');
let outputArea = document.getElementById('out-txt');

let url = 'https://api.funtranslations.com/translate/minion.json';

function createURL(text) {
  return url + '?text=' + text;
}

function clickHandler() {
  let inText = inputArea.value;
  let outText = '';
  fetch(createURL(inText))
    .then((response) => response.json())
    .then((json) => {
      outText = json.contents.translated;
      outputArea.value = outText;
    })
    .catch((err) => console.log(err));
}

btnTranslate.addEventListener('click', clickHandler);
