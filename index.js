//http://placehold.it/1920x1080

function OnLoadDefault(){
  $(document).ready(function(e) {
      $('#HTMLmenu').load('HTMLmenu.html',function(){
        //
      });
    });
    $(document).ready(function(e) {
        $('#HTMLfooter').load('HTMLfooter.html',function(){
          //
        });
      });
}

function OnLoadIndex(){
  OnLoadDefault();
}
function OnLoadNosaltres(){
  OnLoadDefault();
  //document.getElementById("a-nosaltres").className+=" own-currentPageMenu";
}
