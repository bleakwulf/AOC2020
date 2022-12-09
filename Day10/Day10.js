let inputDemo01 = `16
10
15
5
1
11
7
19
6
12
4`

let inputDemo02 = `28
33
18
42
31
14
46
20
48
47
24
23
49
45
19
38
39
11
1
32
25
35
8
17
7
9
4
2
34
10
3`

let input010 = `38
23
31
16
141
2
124
25
37
147
86
150
99
75
81
121
93
120
96
55
48
58
108
22
132
62
107
54
69
51
7
134
143
122
28
60
123
82
95
14
6
106
41
131
109
90
112
1
103
44
127
9
83
59
117
8
140
151
89
35
148
76
100
114
130
19
72
36
133
12
34
46
15
45
87
144
80
13
142
149
88
94
61
154
24
66
113
5
73
79
74
65
137
47`

let inputJoltage = 3
let deviceAdapterBuffer = inputJoltage
let outletOutputJoltage = 0

const solutionD10P01 = rawInput => {
  let input = rawInput    // adapters' output joltages 
    .match(/^(\d)+$/gm)
    .map(data => +data)
    .sort((a, b) => +a > +b ? 1 : +a < +b ? -1 : 0)

  let [deviceAdapter] = input.slice(-1)
  deviceAdapter += deviceAdapterBuffer

  let adapterRefs = input.concat([deviceAdapter])

  let output = { max: outletOutputJoltage }

  while (adapterRefs.length) {
    let validAdapters = adapterRefs
      .filter(x => x <= output.max + inputJoltage)
      ?.sort((a, b) => +a > +b ? 1 : +a < +b ? -1 : 0)
    adapterRefs.splice(0, validAdapters.length)

    validAdapters.forEach(adapter => {
      let diff = adapter - output.max
      output.max = adapter
      output[diff] ??= 0
      output[diff]++
    })
  }

  let { 1: jolt1, 3: jolt3 } = output
  let result = jolt1 * jolt3

  console.log(`\nDay 10 Part 01 : ${result}\n\t1 jolt\t: ${jolt1}\n\t3 jolts\t: ${jolt3}`)
}

const solutionD10P02 = rawInput => {
  let input = rawInput    // adapters' output joltages 
    .match(/^(\d)+$/gm)
    .map(data => +data)
    .concat([outletOutputJoltage])
    .sort((a, b) => +a > +b ? 1 : +a < +b ? -1 : 0)

  let [deviceAdapter] = input.slice(-1)
  deviceAdapter += deviceAdapterBuffer

  let adapterRefs = input.concat([deviceAdapter])

  let accummulator = {}
  adapterRefs.forEach(adapter => {
    accummulator[adapter] ??= 0
    for (let i = inputJoltage; i > 0; i--) {
      accummulator[adapter] += accummulator[adapter - i] || (adapter <= inputJoltage && adapter - i === 0 ? 1 : 0)
    }
  })

  console.log(`\nDay 10 Part 02 : ${accummulator[deviceAdapter]} `)
}

solutionD10P01(inputDemo01)
solutionD10P01(inputDemo02)
solutionD10P02(inputDemo01) // 8
solutionD10P02(inputDemo02) // 19208

solutionD10P01(input010)
solutionD10P02(input010)