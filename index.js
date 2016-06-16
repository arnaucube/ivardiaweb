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
/*
- La señora haciendo el saludo de la victoria (_013)
- Paisaje Sol (_008)
- Paisaje Sol niñxs (004)
- Señora en balcón (la que se vea bien, he visto que no está bien pillado el frame)) (_036)
- Barricadas (020, 026, 028, 001)
- Paisajes (057, 059, 058, 045)
- Gente (014, 074, 068, 071, 012)
*/
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

$(window).bind('scroll', function () {
  console.log($(window).scrollTop());
    if ($(window).scrollTop() > 25) {
        //$('.menu').addClass('own-menuFixed');
        document.getElementById("menu").className="own-menuFixed";
    } else {
        //$('.menu').removeClass('own-menuFixed');
        document.getElementById("menu").className="own-menu";
    }
});

function ShowMenuButtons(){
  if(document.getElementById("menuButtons").className.indexOf("own-displayShowBlock") > -1)
  {
    document.getElementById("menuButtons").className="own-menuButtons";
  }else{
    document.getElementById("menuButtons").className+=" own-displayShowBlock";
  }
}
