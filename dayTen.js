const fs = require('fs');
const readline = require('readline');


const file = readline.createInterface({
    input: fs.createReadStream('input/dayTen.txt'),
    output: process.stdout,
    terminal: false
});


const pairs =['()', '[]', '{}',  '<>']
let score = 0
file.on('line', (line) => {
  // console.log()
  // console.log(line)
  let stack = ''
  let corrupted = false

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

  console.log(`score: ${score}`)
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
        console.log(3)
        score += 3
        // console.log(`Expecting ( but found ${matchingOpeningChunk}`)
        return 'error'
      }
      break;
    case ']':
      if(matchingOpeningChunk != '['){
        console.log(57)
        score += 57
        // console.log(`Expecting [ but found ${matchingOpeningChunk}`)
        return 'error'
      }
      break;
    case '}':
      if(matchingOpeningChunk != '{'){
        console.log(1197)
        score += 1197
        // console.log(`Expecting { but found ${matchingOpeningChunk}`)
        return 'error'
      }
    break;
    case '>':
    if(matchingOpeningChunk != '<'){
      console.log(25137)
      score += 25137
      // console.log(`Expecting < but found ${matchingOpeningChunk}`)
      return 'error'
    }
    break;
  }
  return currentStack.substring(0, currentStack.length - 1);
}
