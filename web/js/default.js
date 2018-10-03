/* Color text portail */

$("#epsi").hover(function(){
    $(".baseline").css("color", "#271549");
    }, function(){
    $(".baseline").css("color", "white");
});
$("#ifag").hover(function(){
    $(".baseline").css("color", "#D50100");
    }, function(){
    $(".baseline").css("color", "white");
});
$("#wis").hover(function(){
    $(".baseline").css("color", "#FDEA18");
    }, function(){
    $(".baseline").css("color", "white");
});

/*  */

// $("#epsi").hover(function(){
	// var $this = $(this).text();
    // $(".textFooter").text("EPSI L'École d'ingénierie informatique");
    // }, function(){
	// $($this).text(this);
// });

$(function(){
	var origine = "Découvrir notre campus à l'aide de l'une des 3 écoles fondatrices";
	
  $('#epsi').hover(function(){
      $(".textFooter").text("EPSI L'École d'ingénierie informatique");
  }, function(){
      $(".textFooter").text(origine);
  });
    $('#wis').hover(function(){
      $(".textFooter").text("WIS L'École Web et digital business");
  }, function(){
      $(".textFooter").text(origine);
  });
    $('#ifag').hover(function(){
      $(".textFooter").text("IFAG L'École de management pour entreprendre & innover");
  }, function(){
      $(".textFooter").text(origine);
  });
})
