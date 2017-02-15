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
  
});
