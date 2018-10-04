/* Color text portail */
$(function(){
	var origine = "Découvrir notre campus à l'aide de l'une des 3 écoles fondatrices";
	
  $('#epsi').hover(function(){
      $(".textFooter").text("EPSI L'École d'ingénierie informatique").css("color","#ffffff");
      $(".wave-svg").css("fill","#4f4091");

  }, function(){
      $(".textFooter").text(origine).css("color","#000000");
      $(".wave-svg").css("fill","#ffffff");

  });
    $('#wis').hover(function(){
      $(".textFooter").text("WIS L'École Web et digital business");
      $(".wave-svg").css("fill","#fbdc00");

  }, function(){
      $(".textFooter").text(origine);
      $(".wave-svg").css("fill","#ffffff");
  });
    $('#ifag').hover(function(){
      $(".textFooter").text("IFAG L'École de management pour entreprendre & innover").css("color","#ffffff");
      $(".wave-svg").css("fill","#e30613");

  }, function(){
      $(".textFooter").text(origine).css("color","#000000");
      $(".wave-svg").css("fill","#ffffff");
  });
});

/* Ne pas glisser les images */
$(function () {
    $("img").on("dragstart", function (event) {
        event.preventDefault();
    });
    $("a").on("dragstart", function (event) {
        event.preventDefault();
    });
});
