const fs = require('fs');
const readline = require('readline');


const file = readline.createInterface({
    input: fs.createReadStream('input/dayOne.txt'),
    output: process.stdout,
    terminal: false
});



let totalA = 0
let totalB = 0
let totalC = 0
let totalD = 0
let phaseCount = 0

let count = 0
file.on('line', (line) => {
  let num = parseInt(line)
  console.log(num)
  console.log(phaseCount)

  if(phaseCount == 3){
      totalB += num
      totalC += num
      totalD += num

      if(totalB > totalA){
        count ++
      }

      console.log(`${totalA} ${totalB} ${totalC} ${totalD} `)
      totalA = totalB
      totalB = totalC
      totalC = totalD
      totalD = 0


      phaseCount = 3
  }

  if(phaseCount == 2){
      totalA += num
      totalB += num
      totalC += num

      console.log(`${totalA} ${totalB} ${totalC} ${totalD} `)
      phaseCount++
  }

  if(phaseCount == 1){
      totalA += num
      totalB += num

      console.log(`${totalA} ${totalB} ${totalC} ${totalD} `)
      phaseCount++
  }

  if(phaseCount == 0){
    totalA += num

    console.log(`${totalA} ${totalB} ${totalC} ${totalD} `)
    phaseCount++
  }





  console.log(count)
  console.log()
});
