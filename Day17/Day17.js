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

solutionD17P01(inputDemo01)  //  
//solutionD17P01(input017)     //

//solutionD17P02(inputDemo02)    //  
//solutionD17P02(input017)       // 