$(
function(){

  var DrawTool = function($drawcanvas){
    var resize_stage = function(){
      var w = $(window).width();
      var h = $(window).height();
      $drawcanvas.width(w-2);
      $drawcanvas.height(h-2-52);
    };

    var initialize = function(){
      $(window).on('resize', resize_stage);
      resize_stage();
    };

    initialize();
  };

  new DrawTool($('#drawtool'));
});
