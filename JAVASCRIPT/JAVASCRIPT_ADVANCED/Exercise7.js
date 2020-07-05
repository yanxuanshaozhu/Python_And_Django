flag = true
names = []
while (flag) {
  var input = prompt("Select one of the commands: add, remove, display or quit.")
  if (input === "add") {
    var name = prompt("Enter a student name.")
    names.push(name)
  } else if (input === "remove") {
    var name = prompt("Enter a student name.")
    var index = names.indexOf(name)
    if (index > -1) {
      names.splice(index, 1)
    }
  } else if (input === "display") {
    for (ele of names) {
      console.log(ele)
    }
  } else if (input === "quit") {
    flag = false
  }
}
