$('h1').click(function() {
  console.log("There was a click!")
})

$('li').click(function() {
  console.log("Any li was clicked!")
})

$('input').eq(0).keypress(function(event) {
  console.log(event.which)
})

$('input').eq(1).on('click', function() {
  $('.container').slideUp(3000)
})
