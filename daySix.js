const fs = require('fs');
const readline = require('readline');


const file = readline.createInterface({
    input: fs.createReadStream('input/daySix.txt'),
    output: process.stdout,
    terminal: false
});



let total = 0
file.on('line', (line) => {
  let arr = line.split(',')

  arr.forEach(bodyClock => {
    switch(bodyClock){
      case '1': total += 1401; break;
      case '2': total += 1191; break;
      case '3': total += 1154; break;
      case '4': total += 1034; break;
      case '5': total += 950; break;
      case '6': total += 905; break;
    }

    console.log(total)

  })
});

///1 1401
//2 1191
//3 1154
//4 1034
//5 950
//6 905
//7 779
