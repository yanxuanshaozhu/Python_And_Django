// The Javascript Code is linked in the head of html and is executed when loaded, yet the  body part which contains the heading
// has not been loaded, thus querySelector alone will returns null. We need window.onload to load the full page as a whole and then
// execute the js code so that it will not return null.

window.onload = function() {
  var headOne = document.querySelector('#one')
  var headTwo = document.querySelector('#two')
  var headThree = document.querySelector('#three')



  headOne.addEventListener('mouseover', function() {
    headOne.textContent = "Mouse currently Over";
    headOne.style.color = 'red';
  })
  headOne.addEventListener('mouseout',function() {
    headOne.textContent = "Hover Over Me!"
    headOne.style.color = 'black'
  })

  headTwo.addEventListener('click',function() {
    headTwo.textContent = "Click On!"
    headTwo.style.color = 'blue'
  })

  headThree.addEventListener('dblclick',function() {
    headThree.textContent = "Double Click On!"
    headThree.style.color = 'orange'
  })
}
