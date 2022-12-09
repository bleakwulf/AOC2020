let inputDemo01 = `.#.
..#
###`

let inputDemo02 = ``

let input017 = `#...#.#.
..#.#.##
..#..#..
.....###
...#.#.#
#.#.##..
#####...
.#.#.##.`

const solutionD17P01 = rawInput => {

  let cubeState = new Map()
  let initActiveLayer = rawInput.split(`\n`)
    .map(row => row.split(''))
    .forEach((row, x) => {
      row.forEach((column, y) => {
        if (column === `#`) cubeState.set(`0|${x}|${y}`, column)
      })
    })

  console.log(initActiveLayer)
  console.log(cubeState)
  console.log(`\nDay 17 Part 01 : {result}`)
}

const solutionD176P02 = rawInput => {

  console.log(`\nDay 17 Part 02 : {result}`)
}

//solutionD17P01(inputDemo01)  //  
//solutionD17P01(input017)     //

//solutionD17P02(inputDemo02)    //  
//solutionD17P02(input017)       // 

const test = rawInput => {
  let cubestate = rawInput
    .split('\n')
    .map( row => row.split(''))

  //return cubestate

  for (x = 0; x < 3; x++) {
    for (y= 0; y < 3; y++) {
      let coord = x*10 + y
      /getNeighbors(`0,${x},${y}`)
    }
  }
}


let getNeighbors = coords => {
  let [ zMain, xMain, yMain ] = coords.split(',')
  console.log(`${'\n'}[${zMain},${xMain},${yMain}]:`)
  
  for (z = zMain - 1; z <= zMain + 1; z++) {
    for (x = xMain - 1; x <= xMain + 1; x++) {
      for (y = yMain - 1; y <= yMain + 1; y++) {
        let neighbor = `${z},${x},${y}`
        if (coords !== neighbor) {
          console.log(`${'\t'}${neighbor}`)
        }
      }
    }
  }
}

console.log(test(inputDemo01))