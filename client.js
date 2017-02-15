$(document).ready(function(){
  console.log('jquery is ready to go!');//log to say we're ready
  var colorArray = ['AliceBlue', 'AntiqueWhite', 'CadetBlue', 'Aqua', 'Chartreuse'];//array of colors

  // loops through all the colors
  for (var i = 0; i < colorArray.length; i++) {
    // adding a new block
    var newColorBlock = $('<div>');//empty div - not added yet
    newColorBlock.css('background-color', colorArray[i]); //adds a color to the div
    newColorBlock.addClass('colorBlock'); //adds a class to the empty div - gives height & width
    $('#colorBlockContainer').append(newColorBlock); //add the div to the DOM.
  }


  // select a random color and add it to the DOM
  var randomNumberSelected = randomNumber(0, colorArray.length - 1); //selects a random number
  var randomColor = colorArray[randomNumberSelected]; //uses the random number to select a number form the array
  $('#userColorPrompt').text(randomColor);

  

});

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
