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
      case '1': total += 6206821033; break;
      case '2': total += 5617089148; break;
      case '3': total += 5217223242; break;
      case '4': total += 4726100874; break;
      case '5': total += 4368232009; break;
      case '6': total += 3989468462; break;
    }

    console.log(total)

  })
});

//1 6206821033
//2 5617089148
//3 5217223242
//4 4726100874
//5 4368232009
//6 3989468462
//7 3649885552
//8 3369186778
//
