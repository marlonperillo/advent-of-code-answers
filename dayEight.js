const fs = require('fs');
const readline = require('readline');

let total = 0;

const file = readline.createInterface({
    input: fs.createReadStream('input/dayEight.txt'),
    output: process.stdout,
    terminal: false
});


file.on('line', (line) => {
  // console.log(line)
  solution(line)
  console.log(total)
});




function solution(input){
  let signalPatterns = input.split(' | ')[0]
  let outputValue = input.split(' | ')[1]

  console.log(outputValue)

  let totalCount = 0
  outputValue.split(' ').forEach(word => {
    if(word.length == 2)
      totalCount++
    if(word.length == 4)
      totalCount++
    if(word.length == 3)
      totalCount++
    if(word.length == 7)
      totalCount++
  })
  total += totalCount
  console.log(totalCount)

}
