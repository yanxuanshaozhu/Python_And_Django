var input = prompt("Enter your age:")
var age = parseInt(input)
if(age < 18) {
  alert("Adolescent")
} else if (age >= 18 && age < 50) {
  alert("Adult")
} else if (age >= 50) {
  alert("Senior")
} else {
  alert("Wrong input of age")
}
