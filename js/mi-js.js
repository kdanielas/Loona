
    "use strict";
    const bodyTag= document.querySelector('body');
    const myHeader= document.querySelector('header');
    
         window.onscroll = function() {scrollFunction()};
 
//----- Scroll menu
function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById("menu").style.background = "#1A1A1D";
       document.getElementById("menu").style.borderBottom = "solid 1px #333333";
 
  } else {
    document.getElementById("menu").style.background = "none";
        document.getElementById("menu").style.borderBottom = "solid 0px #333333";
  }
}
    //Boton menu responsive
    function boton(x){
    
    x.classList.toggle("fa-mayor");
}
    

 //Boton menu In
        function func(id) {

       var e = document.getElementById("menuIn");

       if(e.style.height == '120%')
       
          e.style.height = '0%';

       else
          e.style.height = '120%';
    }
    
