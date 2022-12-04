const clickContainer = document.querySelector(".top-words-wrapper")
const buttonEl = document.querySelector('#find-out')
const wordList = document.querySelector('#list')
const wordsWrapper = document.querySelector('.top-words-wrapper')

let filteredWords = []

let mobyArray = mobyDick.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").split(' ')
let stopWordsArray = stopWords.toLowerCase().split(' ')

function filterStopwords() {      
    const newMoby = mobyArray.filter(word => !stopWordsArray.includes(word))   
    filteredWords.push(newMoby);
    topOneHundred()
}

function topOneHundred() {
  let mobyMap = new Map();

  filteredWords[0].forEach((word) => {
    mobyMap.get(word)
      ? mobyMap.set(word, mobyMap.get(word) + 1)
      : mobyMap.set(word, 1);
  });

  const sortedMap = new Map([...mobyMap].sort((a, b) => b[1] - a[1]));

  let i = 1;

  for (let [key, val] of sortedMap) {
    if (i > 100) return;

    let topEl = document.createElement("li");
    topEl.textContent = `${key} - ${val}`;
    topEl.className += "top-el-list";
    wordList.appendChild(topEl);
    buttonEl.classList.add("hide");
    i++;
  }
}


function handleClick(e) { 
    if (!e.target.matches('#find-out')) {
        return;
      }
        filterStopwords()
    }  
  

clickContainer.addEventListener("click", handleClick)




