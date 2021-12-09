let startCount = 1

let school = [startCount]

console.log(school)

// for(let days = 0; days < 80; days++){
  for(let days = 0; days < 256; days++){

  for(let i = 0; i < school.length; i++){
    school[i] --
    if(school[i] == -1){
      school[i] = 6
      school.push(9)

    }



  }
  console.log(days)
  // console.log(school)

}
console.log(school.length)

//1 1401
//2 1191
//3 1154
//4 1034
//5 950
//6 905
//7 779
