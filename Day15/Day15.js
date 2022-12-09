let inputDemo01 = `0,3,6`

let inputDemo02 = `1,3,2`
let inputDemo03 = `2,1,3`
let inputDemo04 = `1,2,3`
let inputDemo05 = `2,3,1`
let inputDemo06 = `3,2,1`
let inputDemo07 = `3,1,2`

let input015 = `0,8,15,2,12,1,4`
let maxTurnDefault = 2020

const findNumber = (rawInput, maxTurn = maxTurnDefault) => {
  let inputBase = rawInput.split(`,`).map(seed => +seed)

  const lastTurns = new Map()
  let [currentNumber] = inputBase
  let turnCount = 1

  while (turnCount < maxTurn) {
    let isBeyondSeed = turnCount >= inputBase.length
    if (!isBeyondSeed) currentNumber = inputBase[turnCount - 1]

    if (!isBeyondSeed || !lastTurns.has(currentNumber)) {
      //console.log(`\nTurn #${`${turnCount}`.padStart(4, `0`)}[A] : ${currentNumber}`)
      lastTurns.set(currentNumber, turnCount)
      currentNumber = isBeyondSeed ? 0 : inputBase[turnCount]

    } else { // i.e., lastTurns.has(currentNumber)
      //console.log(`\nTurn #${`${turnCount}`.padStart(4, `0`)}[B] : ${currentNumber}`)  
      let recentTurn = lastTurns.get(currentNumber)

      lastTurns.set(currentNumber, turnCount)
      currentNumber = Math.abs(recentTurn - turnCount)
    }

    turnCount++
  }

  return currentNumber
}

const solutionD15P01 = rawInput => {
  let currentNumber = findNumber(rawInput)
  console.log(`\nDay 15 Part 01 : ${currentNumber}`)
}

const solutionD15P02 = rawInput => {
  let currentNumber = findNumber(rawInput, 30000000)
  console.log(`\nDay 15 Part 02 : ${currentNumber}`)
}

solutionD15P01(inputDemo01)  //  436
solutionD15P01(inputDemo02)  //  1
solutionD15P01(inputDemo03)  //  10
solutionD15P01(inputDemo04)  //  27
solutionD15P01(inputDemo05)  //  78
solutionD15P01(inputDemo06)  //  438
solutionD15P01(inputDemo07)  //  1836
solutionD15P01(input015)     //  289 

solutionD15P02(inputDemo01)  //  175594 
solutionD15P02(inputDemo02)  //  2578
solutionD15P02(inputDemo03)  //  3544142
solutionD15P02(inputDemo04)  //  261214
solutionD15P02(inputDemo05)  //  6895259
solutionD15P02(inputDemo06)  //  18
solutionD15P02(inputDemo07)  //  362 
solutionD15P02(input015)     //  1505722