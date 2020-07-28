window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById("header").style.fontSize = "30px";
  } else {
    document.getElementById("header").style.fontSize = "80px";
  }
}


document.getElementById("navMenu").innerHTML =
  '<ul style="list-style-type:none;">'+
  '<li><a href="https://sanskritea.github.io/luftmenschladies/index.html">Frontpage</a><br></li>'+
  '<li><a href="https://sanskritea.github.io/luftmenschladies/about/about.html">About Us</a><br></li>'+
 '</ul>'+
  '<ul style="list-style-type:none;">'+
  '<li><a href="https://sanskritea.github.io/luftmenschladies/posts/1/1.html">I</a><br></li>'+
  '<li><a href="https://sanskritea.github.io/luftmenschladies/posts/2/2.html">II</a><br></li>'+
  '<li><a href="https://sanskritea.github.io/luftmenschladies/posts/3/3.html">III</a><br></li>'+
  '<li><a href="https://sanskritea.github.io/luftmenschladies/posts/4/4.html">IV</a><br></li>'+
  '<li><a href="https://sanskritea.github.io/luftmenschladies/posts/5/5.html">V</a><br></li>'+
  '<li><a href="https://sanskritea.github.io/luftmenschladies/posts/6/6.html">VI</a><br></li>'+
  '<li><a href="https://sanskritea.github.io/luftmenschladies/posts/7/7.html">VII</a><br></li>'+
  '</ul>';
