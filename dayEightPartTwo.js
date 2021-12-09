/*
get 1,4,7,8

get 9
  1+4+7+ [1 remaining letter]

get 0
  six char word with 1

get 6
  only six char word left

get 3
  includes all char in 1

get 5
  include three out of four chars in 4

last number 2

*/

const fs = require('fs');
const readline = require('readline');


const file = readline.createInterface({
    input: fs.createReadStream('input/dayEight.txt'),
    output: process.stdout,
    terminal: false
});
let answer = 0
file.on('line', (line) => {
  // console.log(line)

  solution(line)
  console.log(answer)
})

function solution(input){
  let signalPatterns = input.split(' | ')[0]
  let outputValue = input.split(' | ')[1]
  let patterns = []
  // console.log(signalPatterns)

  signalPatterns = signalPatterns.split(' ')

  //get 1,4,7,8
  signalPatterns.forEach(word => {
    if(word.length == 2){
      patterns[1] = word
    }
    if(word.length == 4){
      patterns[4] = word
    }
    if(word.length == 3){
      patterns[7] = word
    }
    if(word.length == 7){
      patterns[8] = word
    }
  })
  //remove 1478 from list
  signalPatterns = remove(signalPatterns, patterns[1])
  signalPatterns = remove(signalPatterns, patterns[4])
  signalPatterns = remove(signalPatterns, patterns[7])
  signalPatterns = remove(signalPatterns, patterns[8])

  //get 9
  //all chars 4 & 7
  signalPatterns.forEach(word => {
    if(word.length == 6){
      if( containsAllSegments(word, patterns[4])&& containsAllSegments(word, patterns[7])){
        //console.log(word)
        patterns[9] = word
      }
    }
  })
  signalPatterns = remove(signalPatterns, patterns[9])

  //get 0
  // six char word with 1
  signalPatterns.forEach(word => {
    if(word.length == 6){
      if(containsAllSegments(word, patterns[1])){
        // console.log(word)
        patterns[0] = word
      }
    }
  })
  signalPatterns = remove(signalPatterns, patterns[0])

  //get 6
  //6 char word left
  signalPatterns.forEach(word => {
    if(word.length == 6){
      // console.log(word)
      patterns[6] = word
    }
  })
  signalPatterns = remove(signalPatterns, patterns[6])

  //get 3
  // includes all char in 1
  signalPatterns.forEach(word => {
    if(containsAllSegments(word, patterns[1])){
      // console.log(word)
      patterns[3] = word
    }
  })
  signalPatterns = remove(signalPatterns, patterns[3])

  //get 5
  //include three out of four chars in 4
  signalPatterns.forEach(word => {
    let charMatchCount = 0
    let characters = [...patterns[4]]
    characters.forEach( letter => {
      if( word.indexOf(letter) > -1 ){
        charMatchCount++
      }
    })
    if(charMatchCount == 3){
      // console.log(word)
      patterns[5] = word
    }
  })
  signalPatterns = remove(signalPatterns, patterns[5])

  //last number 2
  patterns[2] = signalPatterns[0]

  //interpret output output
  let value = ''
  console.log(outputValue)
  // console.log(patterns)
  outputValue.split(' ').forEach(word => {
    for(let i = 0; i < patterns.length; i++){
      if(patterns[i].length == word.length){
        if(containsAllSegments(word, patterns[i])){

          value += i
        }
      }
    }
  })
  // console.log(value)
  answer += parseInt(value)
}
function containsAllSegments(string, substring) {
    var letters = [...string];
    return [...substring].every(x => {
        var index = letters.indexOf(x);
        if (~index) {
            letters.splice(index, 1);
            return true;
        }
    });
}


function remove(arr, value) {
  var index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}
