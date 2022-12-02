const clickContainer = document.querySelector(".top-words-wrapper")
const buttonEl = document.querySelector('#find-out')
const wordList = document.querySelector('#list')

const filteredWords = []

let mobyArray = mobyDick.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").split(' ')
let stopWordsArray = stopWords.toLowerCase().split(' ')

function filterStopwords() {      
    const newMoby = mobyArray.filter(word => !stopWordsArray.includes(word))   
    filteredWords.push(newMoby);
    topOneHundred()

}


function topOneHundred() { 
    
  let mobyMap = {}
  

    filteredWords.forEach((word) => {
        mobyMap[word] = (mobyMap[word] || 0) + 1;   
       
    })

   
   


}



function handleClick() {    
filterStopwords()
}

clickContainer.addEventListener("click", handleClick)