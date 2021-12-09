
let startCount = 2
let maxDays = 10
let fishCount = 1
let breedingPeriod = 80
function breed(daysCount, bodyClock){

  while(daysCount > 0){
    // console.log(`${daysCount} ${bodyClock}`)
    bodyClock --
    daysCount --

    if(bodyClock == -1){
      bodyClock = 6;
      fishCount++
      breed(daysCount, 8)
    }

  }

}


//breed(256, startCount)
//console.log(fishCount)

fishCount = 1
breed(breedingPeriod, 1)
console.log(`1 ${fishCount}`)

fishCount = 1
breed(breedingPeriod, 2)
console.log(`2 ${fishCount}`)

fishCount = 1
breed(breedingPeriod, 3)
console.log(`3 ${fishCount}`)

fishCount = 1
breed(breedingPeriod, 4)
console.log(`4 ${fishCount}`)

fishCount = 1
breed(breedingPeriod, 5)
console.log(`5 ${fishCount}`)

fishCount = 1
breed(breedingPeriod, 6)
console.log(`6 ${fishCount}`)

fishCount = 1
breed(breedingPeriod, 7)
console.log(`7 ${fishCount}`)

fishCount = 1
breed(breedingPeriod, 8)
console.log(`8 ${fishCount}`)

//1 6206821033
//2 5617089148
//3 5217223242
//4 4726100874
//5 4368232009
//6 3989468462
//7 3649885552
//8 3369186778
//
