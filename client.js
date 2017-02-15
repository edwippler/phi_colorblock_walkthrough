var colorArray = ['AliceBlue', 'AntiqueWhite', 'CadetBlue', 'Aqua', 'Chartreuse'];//array of colors
var randomColor = '';

$(document).ready(function(){
  // console.log('jquery is ready to go!');//log to say we're ready

  // loops through all the colors
  for (var i = 0; i < colorArray.length; i++) {
    // adding a new block
    var newColorBlock = $('<div>');//empty div - not added yet
    newColorBlock.css('background-color', colorArray[i]); //adds a color to the div
    newColorBlock.addClass('colorBlock'); //adds a class to the empty div - gives height & width
    newColorBlock.data('colorOfBlock', colorArray[i]); // adds information to DOM without showing it to the user
    $('#colorBlockContainer').append(newColorBlock); //add the div to the DOM.
  }

  $('#colorBlockContainer').on('click', '.colorBlock', function(){
    console.log($(this).data().colorOfBlock);
    var colorOfBlockSelected = $(this).data().colorOfBlock;
    if (randomColor == colorOfBlockSelected){
      //the user got it right
      $("#responseSection").text('You got it!');
      chooseNewRandomColor(); 
    }else {
      $('#responseSection').text('Oh no...that is not right')
    }
  });

  chooseNewRandomColor();

});

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

function chooseNewRandomColor() {
  // select a random color and add it to the DOM
  var randomNumberSelected = randomNumber(0, colorArray.length - 1); //selects a random number
  randomColor = colorArray[randomNumberSelected]; //uses the random number to select a number form the array
  $('#userColorPrompt').text(randomColor);

}
