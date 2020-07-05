var items = []
for (var i = 0; i < 5; i++) {
  var input = prompt("Enter a random number")
  items.push(parseInt(input))
}
alert("Origin Array " + items)

items.forEach((item, i, items) => {
  temp = items[i]
  items[i] = temp + 1
});


alert("Changed Array " + items)
