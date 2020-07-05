console.log("ForProblem1")
for (var i = 0; i < 5; i++) {
  console.log("hello")
}

console.log("WhileProblem1")
var i = 0
while (i < 5) {
  console.log("hello")
   i += 1
}

console.log("ForProblem2")
for (var i = 0; i < 26; i++) {
  if ((i & 1) == 1) {
    console.log(i)
  }
}

console.log("WhileProblem2")
var i = 0
while (i < 26) {
  if ((i & 1) == 1) {
    console.log(i)
  }
   i += 1
}
