$(document).ready(function(){

  // Set variables to select once

  var $embarcadero = $('button[name="embarcadero"]'),
    $montgomery = $('button[name="montgomery"]'),
    $powell = $('button[name="powell"]'),
    $cc = $('button[name="cc"]')
    $allButtons = $('button[name="embarcadero"], button[name="montgomery"], button[name="powell"], button[name="cc"]');

  $allButtons.click(function(){
    $(this).toggleClass('btn-highlight');
  })
});