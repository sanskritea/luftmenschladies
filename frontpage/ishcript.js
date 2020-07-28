window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById("header").style.fontSize = "30px";
  } else {
    document.getElementById("header").style.fontSize = "80px";
  }
}


document.getElementById("navMenu").innerHTML =
  '<ul>'+
  '<li><a href="index.html">Home</a></li>'+
  '<li><a href="services.html">Services</a></li>'+
  '<li><a href="about.html">About</a></li>'+
 '</ul>';
