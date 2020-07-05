// var fn = prompt("Enter Your First Name:")
// var ln = prompt("Enter Your Last Name:")


var name = prompt("Enter Your name")
var temp = name.split(" ")
var fn = temp[0]
var ln = temp [1]
var age = prompt("Enter Your Age:")
var ht = prompt("Enter Your Height in Centimeters:")
var pn = prompt("Enter Your Pet Name:")

if ((fn[0] === ln[0]) && (age > 20 && age < 30) && (ht >= 170) && (pn[pn.length - 1] === "y")) {
  console.log("Kill Yourself")
}
