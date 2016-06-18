//http://placehold.it/1920x1080
var actualWindow="";
function OnLoadDefault(){
  /*$(document).ready(function(e) {
      $('#HTMLmenu').load('HTMLmenu.html',function(){
        //
      });
    });
    $(document).ready(function(e) {
        $('#HTMLfooter').load('HTMLfooter.html',function(){
          //
        });
    });*/
    console.log(actualWindow);
    if(actualWindow!="index")
    {
      $(window).bind('scroll', function () {
        console.log($(window).scrollTop());
          if ($(window).scrollTop() > 25) {
              //document.getElementById("menu").className="own-menuFixed";
              document.getElementById("menu").className="own-menuFixed";
              document.getElementById("logoIvardia").className+=" own-overImage-logo-small";
              document.getElementById("menuButtons").className+=" own-menuButtons-small";
          } else {
              document.getElementById("menu").className="own-menu";
              document.getElementById("logoIvardia").className="own-overImage-logo";
              document.getElementById("menuButtons").className="own-menuButtons";
          }
      });
    }
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
  actualWindow="index";
  OnLoadDefault();
  var numImg=1;
  var visibleImg=0;
  setInterval(function(){

    console.log(numImg);
    console.log("visibleImg: " + visibleImg);


    document.getElementById("backgroundImage"+visibleImg).className="own-indexBackgroundImage";
    if(visibleImg==0){
      visibleImg=1;
    }else{
      visibleImg=0;
    }

    document.getElementById("backgroundImage"+visibleImg).className+=" own-opacity0";
    document.getElementById("backgroundImage"+visibleImg).src="imatges/background/background"+numImg+".jpg";

    numImg++;
    if(numImg>9)
    {
      numImg=0;
    }
  }, 10000);
}
function OnLoadNosaltres(){
  OnLoadDefault();
  setTimeout(function(){
    document.getElementsByClassName("own-menuButtons")[0].childNodes[3].className="own-currentPageMenu";
  }, 500);
}
function OnLoadContacte(){
  OnLoadDefault();
  setTimeout(function(){
    document.getElementsByClassName("own-menuButtons")[0].childNodes[5].className="own-currentPageMenu";
  }, 8000);
}

function OnClickCampanyesDeSuport(){

  if(document.getElementById("desplegable").className=="own-desplegable")
  {
    document.getElementById("desplegable").className="own-desplegableAmagat";
  }else{
    var auxhtml="";
    auxhtml+="<h3>El nostre projecte, un viatge a Bakur</h3>";
    auxhtml+="El 19 d’octubre de 2015 vam decidir viatjar al Kurdistan amb unes motxilles plenes de càmeres, micros, llibretes, pors i esperances. Feia mesos que gestàvem la idea. D’ençà que havíem descobert el moviment kurd seguíem amb interès i admiració tant la seva resistència com la seva proposta política: un sistema basat en el municipalisme, l’ecologia social i l’alliberament de la dona, tot això alimentat per un poble lluitador, crític i solidari.";
    document.getElementById("desplegable").innerHTML=auxhtml;
    document.getElementById("desplegable").className="own-desplegable";
  }

}



function ShowMenuButtons(){
  if(document.getElementById("menuButtons").className.indexOf("own-displayShowBlock") > -1)
  {
    document.getElementById("menuButtons").className="own-menuButtons";
  }else{
    document.getElementById("menuButtons").className+=" own-displayShowBlock";
  }
}
function ShowMenuButtonsIndex(){
  if(document.getElementById("menuButtons").className.indexOf("own-displayShowBlock") > -1)
  {
    document.getElementById("menuButtons").className="own-menuButtons own-whiteText";
  }else{
    document.getElementById("menuButtons").className+=" own-displayShowBlock";
  }
}


function NoFunction(){

}
