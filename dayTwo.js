const fs = require('fs');
const readline = require('readline');


const file = readline.createInterface({
    input: fs.createReadStream('input/dayTwo.txt'),
    output: process.stdout,
    terminal: false
});


let horizontalValue = 0
let depthValue = 0
let aimValue = 0

file.on('line', (line) => {
  console.log(line)
  let lineArr=  line.split(' ')

  let command = lineArr[0]
  let value = parseInt(lineArr[1])

  console.log(command)
  console.log(value)



  if(command == 'forward'){
    horizontalValue += value
    depthValue += value*aimValue
  }
  if(command == 'down')
    aimValue += value
  if(command == 'up')
    aimValue -= value

  console.log(depthValue*horizontalValue)
});
