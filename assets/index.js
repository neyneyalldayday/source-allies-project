const clickContainer = document.querySelector(".top-words-wrapper")
const buttonEl = document.querySelector('#find-out')
const wordList = document.querySelector('#list')
const wordsWrapper = document.querySelector('.top-words-wrapper')

let filteredWords = []
console.log(filteredWords)


let mobyArray = mobyDick.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").split(' ')
let stopWordsArray = stopWords.toLowerCase().split(' ')

function filterStopwords() {      
    const newMoby = mobyArray.filter(word => !stopWordsArray.includes(word))   
    filteredWords.push(newMoby);
    topOneHundred()
}


function topOneHundred() { 
    
  let mobyMap = {}
  
  filteredWords[0].forEach((word) => {
        mobyMap[word] = (mobyMap[word] || 0) + 1;          
    })
       
    
   for (key in mobyMap){

    let billPaxton = [key, mobyMap[key]]    
    
    let topEl = document.createElement("li")
    topEl.textContent = billPaxton
    topEl.className += "top-el-list"
    wordList.appendChild(topEl)
    buttonEl.classList.add("hide")    

   }
}

function handleClick(e) { 
    if (!e.target.matches('#find-out')) {
        return;
      }
        filterStopwords()
    }  
  

clickContainer.addEventListener("click", handleClick)




