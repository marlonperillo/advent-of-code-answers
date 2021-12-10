const fs = require('fs');
const readline = require('readline');


const file = readline.createInterface({
    input: fs.createReadStream('input/dayTen.txt'),
    output: process.stdout,
    terminal: false
});


const pairs =['()', '[]', '{}',  '<>']
let scores = []
file.on('line', (line) => {
  let stack = ''
  let corrupted = false
  let currentScore = 0

  line.split('').forEach(c => {
    // console.log(c)
    if(!corrupted){
      switch(c){
        case ')':
        case ']':
        case '}':
        case '>':
          // console.log(`${stack} ${c}`)
          stack = removeChunk(stack, c)
          if(stack == 'error'){
            // console.log('error found')
            corrupted = true;
          }
          break;
        default: stack = stack + c
      }
    }
  })

  if(!corrupted){
    if(stack.length == 0){
      console.log('complete')
    }
    // console.log(stack)
    stack.split('').reverse().forEach(c => {
      switch(c){
        case '(': currentScore = (currentScore * 5) + 1; break;
        case '[': currentScore = (currentScore * 5) + 2; break;
        case '{': currentScore = (currentScore * 5) + 3; break;
        case '<': currentScore = (currentScore * 5) + 4; break;
      }
    })
  }

  if(!corrupted){
    scores.push(currentScore)
    let tempScores = scores.sort(function(a, b){return a - b})
    let index = Math.floor(tempScores.length/2)
    // console.log(index)
    console.log(tempScores[index])
  }

  // console.log(`score: ${score}`)
});


function removeChunk(currentStack, closingChunk){
  if(currentStack.length == 0){
    console.log('current stack is empty. cannot close')
    return
  }
  let matchingOpeningChunk = currentStack.charAt(currentStack.length-1)
  switch(closingChunk){
    case ')':
      if(matchingOpeningChunk != '('){
        return 'error'
      }
      break;
    case ']':
      if(matchingOpeningChunk != '['){
        return 'error'
      }
      break;
    case '}':
      if(matchingOpeningChunk != '{'){
        return 'error'
      }
    break;
    case '>':
    if(matchingOpeningChunk != '<'){
      return 'error'
    }
    break;
  }
  return currentStack.substring(0, currentStack.length - 1);
}
