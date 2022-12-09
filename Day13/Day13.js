let inputDemo = `939
7,13,x,x,59,x,31,19`

let inputDemo02 = `test2
17,x,13,19`
let inputDemo03 = `test3
67,7,59,61`
let inputDemo04 = `test4
67,x,7,59,61`
let inputDemo05 = `test5
67,7,x,59,61`
let inputDemo06 = `test6
1789,37,47,1889`

let input013 = `1006697
13,x,x,41,x,x,x,x,x,x,x,x,x,641,x,x,x,x,x,x,x,x,x,x,x,19,x,x,x,x,17,x,x,x,x,x,x,x,x,x,x,x,29,x,661,x,x,x,x,x,37,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,23`

const solutionD13P01 = rawInput => {
  let input = rawInput
    .match(/^(?:\w|,)+$/gm)

  let [myDepartTime, buses] = input
  myDepartTime = +myDepartTime

  buses = buses
    .split(`,`)
    .filter(bus => +bus)
    .map(bus => +bus)

  let busSims = [...buses]
  let doMoreSims = true

  let minETD
  let earliestBus

  while (doMoreSims) {
    busSims.forEach((bus, index) => busSims[index] += buses[index])

    minETD = [...busSims].sort().find(time => time > myDepartTime)
    if (minETD) earliestBus = buses[busSims.indexOf(minETD)]

    doMoreSims = !minETD
  }

  let result = (Math.abs(myDepartTime - minETD)) * earliestBus

  console.log(`\nDay 13 Part 01 : ${result}`)
  console.log(`\tBus ${earliestBus} @ ${minETD} vs. my ${myDepartTime}`)
}


const solutionD13P02 = rawInput => {
  let [, buses] = rawInput
    .match(/^(?:\w|,)+$/gm)

  let input = buses
    .split(`,`)
    .map(bus => +bus || 0)

  let offsets = input
    .map((bus, index) => !!bus ? index : -1)
    .filter(offset => offset >= 0)

  input = input
    .filter(bus => !!bus)

  let currentTime = 0
  let [interval, nextInterval] = input

  for (let i = 0; i < input.length; i++) {
    interval = i === 0 ? input[i] : interval * input[i]
    nextInterval = input[i + 1]

    let nextOffset = offsets[i + 1]

    while ((currentTime + nextOffset) % nextInterval > 0) {
      currentTime += interval
    }
  }

  console.log(`\nDay 13 Part 02 : ${currentTime}`)
}

solutionD13P01(inputDemo)
solutionD13P02(inputDemo)    // 1068781
solutionD13P02(inputDemo02)  // 3417
solutionD13P02(inputDemo03)  // 754018
solutionD13P02(inputDemo04)  // 779210
solutionD13P02(inputDemo05)  // 1261476
solutionD13P02(inputDemo06)  // 1202161486

solutionD13P01(input013)
solutionD13P02(input013)