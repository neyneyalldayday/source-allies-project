const filteredWords = []

let mobyArray = mobyDick.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").split(' ')
let stopWordsArray = stopWords.toLowerCase().split(' ')




function filterStopwords() {  
const newMoby = mobyArray.filter(word => !stopWordsArray.includes(word))
   
 filteredWords.push(newMoby);

}

filterStopwords()

function topOneHundred() {
  //get the top 100
}
topOneHundred()