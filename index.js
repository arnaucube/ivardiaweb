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
  var numImg=3;
  var visibleImg=1;
  setInterval(function(){

    console.log(numImg);
    console.log("visibleImg: " + visibleImg);


    document.getElementById("backgroundImage"+visibleImg).className+=" own-opacity0";
    document.getElementById("backgroundImage"+visibleImg).src="imatges/background/background"+numImg+".jpg";
    if(visibleImg==0){
      visibleImg=1;
    }else{
      visibleImg=0;
    }

    document.getElementById("backgroundImage"+visibleImg).className="own-indexBackgroundImage";

    numImg++;
    if(numImg>9)
    {
      numImg=0;
    }
  }, 4000);
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
