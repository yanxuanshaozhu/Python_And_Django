// Problem1
// Add a method called nameLength that prints out the
// length of the employees name to the console.
var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  nameLength: function() {
    console.log(this.name.length)
  }
}

// Problem2
// Write program that will create an Alert in the browser of each of the
// object's values for the key value pairs. For example, it should alert:

// Name is John Smith, Job is Programmer, Age is 31.
// Given the object:
var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31
}

for (key in employee) {
  alert(key + " is " + employee[key])
}


// PROBLEM 3

// Add a method called lastName that prints
// out the employee's last name to the console.

var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  lastName:function() {
    temp = this.name.split(" ")
    console.log(temp[1])
  }
}
