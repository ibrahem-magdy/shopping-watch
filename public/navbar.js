var point =0;

window.onscroll=function(){
    // var scroll_point=window.pageYOffset||document.documentElement.scrollTop;
    // if(scroll_point>point){
    //     document.querySelector(".nav").style.top="-106px";
    // }
    // else{
      
    //     document.querySelector(".nav").style.top="0";

    // }

    if(window.scrollY>40){
        document.querySelector(".nav").style.position="fixed"
        document.querySelector(".nav").style.boxShadow="0 10px 15px rgba(25,25,25,0.1)"

    }
    else{
        document.querySelector(".nav").style.boxShadow="none"
        document.querySelector(".nav").style.position="relative"
    }
}