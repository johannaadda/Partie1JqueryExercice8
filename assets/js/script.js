
$(function (){
  //Je veux cliquer sur un boutton pour cacher (target la class button_1) pour evenement au (click)
  $(".button_1").click(function(){
    // pour cacher le text (target the id propre à l'element que lon veut cacher) et ensuite target  l'evenement .hide .show etc
      $("#text").hide();
  });

  //Button 2 pour montrer le text 
  $(".button_2").click(function(){
      $("#text").show();
  });
});
