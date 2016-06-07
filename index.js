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
  var numImg=0;
  setInterval(function(){
    document.getElementById("backgroundImage").src="imatges/background/background"+numImg+".jpg";
    numImg++;
    if(numImg>9)
    {
      numImg=0;
    }
  }, 5000);
}
function OnLoadNosaltres(){
  OnLoadDefault();
  setTimeout(function(){
    document.getElementsByClassName("own-menuButtons")[0].childNodes[3].className="own-currentPageMenu";
  }, 500);
}

function OnClickCampanyesDeSuport(){
  if(document.getElementById("desplegable").className=="own-desplegable")
  {
    document.getElementById("desplegable").className="own-desplegableAmagat";
  }else{
    document.getElementById("desplegable").className="own-desplegable";
  }
}
