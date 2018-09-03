var ls = localStorage.getItem('namespace.visited');
if (ls == null) {
  localStorage.setItem('namespace.visited', 1);

  window.addEventListener("load", function(){
    setTimeout(function() {
      document.getElementById("loader").style.height = "0px";

      document.getElementById("loader").style.top = "100vh";

      document.getElementById("loader").style.visibility = "hidden";

      setTimeout(function() {
        document.getElementById("transitionColor").style.height = "0px";

        document.getElementById("transitionColor").style.top = "100vh";

        document.getElementById("transitionColor").style.visibility = "hidden";
      }, 250); //250
  }, 2750);    //2750
  });
}else{
  window.addEventListener("load", function(){

    setTimeout(function() {
      document.getElementById("loader").style.height = "0px";

      document.getElementById("loader").style.top = "100vh";

      document.getElementById("loader").style.visibility = "hidden";

      setTimeout(function() {
        document.getElementById("transitionColor").style.height = "0px";

        document.getElementById("transitionColor").style.top = "100vh";

        document.getElementById("transitionColor").style.visibility = "hidden";
      }, 250); //250
  }, 0);    //2750
  });
}
